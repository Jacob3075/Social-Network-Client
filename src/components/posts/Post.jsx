import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import postStyles from "../../styles/PostStyles";
import Button from "@material-ui/core/Button";
import CommentService from "../../services/CommentService";
import CommentCard from "./CommentCard";
import { InputAdornment, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { getTopicById } from "../../services/TopicService";
import { getUserById, userService } from "../../services/UserService";
import { arrayBufferToBase64 } from "../../Utils";
import { likePost } from "../../services/PostService";

const Post = ({ id, userId, topicId, description, time, likedUsers, comments, image }) => {

	const classes = postStyles();
	const [expanded, setExpanded] = useState(false);
	const [newComment, setNewComment] = useState("");
	const [likedPost, setLikedPost] = useState(likedUsers.includes(userService.getUserId()));
	const [userName, setUserName] = useState("");
	const [topicName, setTopicName] = useState("");
	const [processedImageString, setProcessedImageString] = useState(image);
	const [numberOfLikes, setNumberOfLikes] = useState(likedUsers.length);

	useEffect(() => {
		getUserById(userId)
			.then((response) => {
				setUserName(response.userName);
			})
			.catch((error) => console.log(error));

		getTopicById(topicId)
			.then((response) => {
				setTopicName(response.topicName);
			})
			.catch(error => console.log(error));

		const base64Flag = `data:${image.contentType};base64,`;
		const imageStr = arrayBufferToBase64(image.data.data);
		setProcessedImageString(base64Flag + imageStr);
	}, [likedPost]);

	const handleExpandComments = () => {
		setExpanded(!expanded);
	};

	const handleTypeNewComment = (event) => {
		setNewComment(event.target.value);
	};

	const handlePostNewComment = (event) => {
		event.preventDefault();
		CommentService.commentedOnPost(id, userId, newComment);
		setNewComment("");
	};

	//TODO
	const handleLikedPost = () => {
		if (likedPost) setNumberOfLikes(numberOfLikes - 1);
		else setNumberOfLikes(numberOfLikes + 1);

		likePost(id, likedPost)
			.then(r => setLikedPost(!likedPost))
			.catch((error) => console.log(error));
	};

	// TODO: FORMAT DATE

	const postHeaderTopicMessage = "" + time;

	const commentComponents = comments.map((comment, index) => (
		<CommentCard key={index} {...comment} />
	));

	return (
		<Card className={classes.root} raised>
			<CardHeader
				title={topicName + "." + userName}
				subheader={postHeaderTopicMessage}
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
					<FavoriteIcon color={likedPost ? "error" : ""} />
				</IconButton>
				{numberOfLikes}
				<form onSubmit={handlePostNewComment} className={classes.form}>
					<TextField
						className={classes.textField}
						size={"small"}
						id="outlined-basic"
						label="New Comment"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SendIcon />
								</InputAdornment>
							)
						}}
						value={newComment}
						onChange={handleTypeNewComment}
					/>
				</form>
				<Button onClick={handleExpandComments} size={"small"}>
					<Typography>Show Comments</Typography>
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>{commentComponents}</CardContent>
			</Collapse>
		</Card>
	);
};

export default Post;
