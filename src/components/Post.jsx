import PropTypes from "prop-types";
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import postStyles from "../styles/PostStyles";
import Button from "@material-ui/core/Button";
import CommentService from "../services/CommentService";
import TopicService from "../services/TopicService";
import { InputAdornment, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import PostService from "../services/PostService";

const Post = ({
	id,
	author,
	body,
	date,
	imageUrl,
	topicId,
	commentId,
	likes,
	userId,
}) => {
	const classes = postStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [newComment, setNewComment] = React.useState("");
	const [likeIconColor, setLikeIconColor] = React.useState("");

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

	const comments = CommentService.mockGetCommentsById(commentId);
	const topic = TopicService.mockGetTopicById(topicId);

	// TODO: FORMATE DATE
	const postHeaderTopicMessage =
		"Posted to Topic " + topic.name + " on " + date;

	const commentComponents = comments.map((comment, index) => (
		<div key={index}>{comment.commentMessage}</div>
	));

	return (
		<Card className={classes.root} raised>
			<CardHeader
				title={author}
				subheader={postHeaderTopicMessage}
				subheaderTypographyProps={{ variant: "subtitle2" }}
			/>
			<CardMedia className={classes.media} image={imageUrl} />
			<CardContent>
				<Typography variant="body2" component="p">
					{body}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={handleLikedPost}>
					<FavoriteIcon color={likeIconColor} />
				</IconButton>
				<Button onClick={handleExpandComments} size={"small"}>
					<Typography>Show Comments</Typography>
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>{commentComponents}</CardContent>
				<form onSubmit={handlePostNewComment} className={classes.form}>
					<TextField
						className={classes.textField}
						id="outlined-basic"
						label="New Comment"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SendIcon />
								</InputAdornment>
							),
						}}
						value={newComment}
						onChange={handleTypeNewComment}
					/>
				</form>
			</Collapse>
		</Card>
	);
};

Post.propTypes = {
	author: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	commentId: PropTypes.number.isRequired,
	date: PropTypes.any.isRequired,
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
	topicId: PropTypes.number.isRequired,
};

export default Post;
