class Post {
	constructor(id, author, body, date, imageUrl, topicId, commentId, likes) {
		this.id = id;
		this.author = author;
		this.date = date;
		this.commentId = commentId;
		this.likes = likes;
		this.body = body; //atleast one
		this.imageUrl = imageUrl; //atleast one
		this.topicId = topicId; //*
	}
}

export default Post;
