class Post {
	constructor(
		id,
		userId,
		topicId,
		description,
		time,
		likedUsers,
		comments,
		image,
		userName,
		topicName
	) {
		this.id = id;
		this.userId = userId;
		this.time = time;
		this.comments = comments;
		this.likedUsers = likedUsers;
		this.description = description;
		this.image = image;
		this.topicId = topicId;
		this.userName = userName;
		this.topicName = topicName;
	}
}

export default Post;
