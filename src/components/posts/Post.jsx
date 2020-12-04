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
import { mockGetTopicById } from "../../services/TopicService";
import { InputAdornment, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import PostService from "../../services/PostService";
import { getUserById } from "../../services/UserService";

const Post = ({ id, userId, topicId, description, time, likedUsers, comments, image }) => {

	const classes = postStyles();
	const [expanded, setExpanded] = useState(false);
	const [newComment, setNewComment] = useState("");
	const [likeIconColor, setLikeIconColor] = useState("");
	const [userName, setUserName] = useState("");

	useEffect(() => {
		getUserById(userId)
			.then((response) => {
				setUserName(response.userName);
			})
			.catch((error) => {
			});

	}, []);

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

	const handleLikedPost = () => {
		setLikeIconColor("error");
		PostService.likedPost(id);
	};

	// comments = CommentService.mockGetCommentsById();
	const topic = mockGetTopicById(topicId);

	// TODO: FORMAT DATE

	const postHeaderTopicMessage = "" + time;

	const commentComponents = comments.map((comment, index) => (
		<CommentCard key={index} {...comment} />
	));

	return (
		<Card className={classes.root} raised>
			<CardHeader
				title={topic.topicName + " • userById.userName"}
				subheader={postHeaderTopicMessage}
				subheaderTypographyProps={{ variant: "subtitle2" }}
			/>
			<CardMedia className={classes.media} image={image} />
			<CardContent>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={handleLikedPost}>
					<FavoriteIcon color={likeIconColor} />
				</IconButton>
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
