import PropTypes, { number, string } from "prop-types";
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

const Post = ({ id, author, body, date, imageUrl, topicId, commentId }) => {
	const classes = postStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	let comments = commentId; // CommentService.getCommentsById(commentId);
	let topic = "Posted to Topic " + topicId + " on " + date; // TopicService.getTopicById(topicId);

	return (
		<Card className={classes.root}>
			<CardHeader
				title={author}
				subheader={topic}
				subheaderTypographyProps={{ variant: "subtitle2"}}
			/>
			<CardMedia className={classes.media} image={imageUrl} />
			<CardContent>
				<Typography variant="body3" component="p">
					{body}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton>
					<FavoriteIcon />
				</IconButton>
				<Button onClick={handleExpandClick} size={"small"}>
					<Typography>Show Comments</Typography>
				</Button>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>{comments}</CardContent>
			</Collapse>
		</Card>
	);
};

Post.propTypes = {
	author: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	commentId: PropTypes.oneOf([number, string]).isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string.isRequired,
	topicId: PropTypes.oneOf([number, string]).isRequired,
};

export default Post;
