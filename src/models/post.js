class Post {
	constructor(id, author, body, date, imageUrl, topicId, commentId) {
		this.id = id;
		this.author = author;
		this.body = body;
		this.date = date;
		this.imageUrl = imageUrl;
		this.topicId = topicId;
		this.commentId = commentId;
	}
}

export default Post;
