class Post {
	constructor(id, author, body, date, imageUrl, topicId, commentId, likes) {
		this.id = id;
		this.author = author;
		this.body = body;
		this.date = date;
		this.imageUrl = imageUrl;
		this.topicId = topicId;
		this.commentId = commentId;
		this.likes = likes;
	}
}

export default Post;
