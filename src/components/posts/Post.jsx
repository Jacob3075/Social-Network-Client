import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import postStyles from "../../styles/PostStyles";
import Button from "@material-ui/core/Button";
import { InputAdornment, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router-dom";
import { userService } from "../../services/UserService";
import { arrayBufferToBase64, parseTimeString } from "../../Utils";
import { addComment, likePost } from "../../services/PostService";
import Collapse from "@material-ui/core/Collapse";
import CommentCard from "./CommentCard";

const Post = ({
	              id,
	              userId,
	              topicId,
	              description,
	              time,
	              likedUsers,
	              comments,
	              image,
	              userName,
	              topicName,
	              setReload
              }) => {
	const history = useHistory();

	const classes = postStyles();
	const [expanded, setExpanded] = useState(false);
	const [newComment, setNewComment] = useState("");
	const [postComments, setPostComments] = useState(comments);
	const [likedPost, setLikedPost] = useState(likedUsers.includes(userService.getUserId()));
	const [processedImageString, setProcessedImageString] = useState("");
	const [numberOfLikes, setNumberOfLikes] = useState(likedUsers.length);

	useEffect(() => {
		const base64Flag = `data:${image.contentType};base64,`;
		const imageStr = arrayBufferToBase64(image.data.data);
		setProcessedImageString(base64Flag + imageStr);
	}, []);

	const handleExpandComments = () => {
		setExpanded(!expanded);
	};

	const handleTypeNewComment = (event) => {
		setNewComment(event.target.value);
	};

	const handlePostNewComment = (event) => {
		event.preventDefault();
		addComment(id, newComment)
			.then((response) => {
				postComments.push(response);
				setPostComments(postComments);
				setReload(true);
			})
			.catch((error) => console.log(error));
		setNewComment("");
	};

	const handleLikedPost = () => {
		if (likedPost) setNumberOfLikes(numberOfLikes - 1);
		else setNumberOfLikes(numberOfLikes + 1);

		likePost(id, likedPost)
			.then((response) => setLikedPost(!likedPost))
			.catch((error) => console.log(error));
	};

	const goToTopicPage = () => {
		history.push(`/topic/${topicId}`);
	};

	const parsedTime = parseTimeString(time);

	const commentComponents = postComments.map((comment, index) => (
		<CommentCard key={index} {...comment} />
	));

	return (
		<Card className={classes.root} raised>
			<CardHeader
				onClick={goToTopicPage}
				title={topicName + " • " + userName}
				subheader={parsedTime.fullDateString}
				subheaderTypographyProps={{ variant: "subtitle2" }}
			/>
			<CardMedia className={classes.media} image={processedImageString} />
			<CardContent>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={handleLikedPost}>
					<FavoriteIcon color={likedPost ? "error" : "inherit"} />
				</IconButton>
				{numberOfLikes}
				<form onSubmit={handlePostNewComment} className={classes.form}>
					<TextField
						className={classes.textField}
						size={"small"}
						label="New Comment"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handlePostNewComment}>
										<SendIcon />
									</IconButton>
								</InputAdornment>
							),
						}}
						value={newComment}
						onChange={handleTypeNewComment}
					/>
				</form>
				<Button onClick={handleExpandComments} size={"small"}>
					<Typography>Show Comments</Typography>
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto">
				<CardContent>{commentComponents}</CardContent>
			</Collapse>
		</Card>
	);
};

Post.propTypes = {
	comments: PropTypes.array.isRequired,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
	likedUsers: PropTypes.array.isRequired,
	setReload: PropTypes.func.isRequired,
	time: PropTypes.string.isRequired,
	topicId: PropTypes.string.isRequired,
	topicName: PropTypes.string.isRequired,
	userId: PropTypes.string,
	userName: PropTypes.string.isRequired
};

export default Post;
