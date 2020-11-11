class User {
	constructor(id, name, posts, comments, createdTopics, subscribedTopics) {
		this.id = id;
		this.name = name;
		this.posts = posts;
		this.comments = comments;
		this.createdTopics = createdTopics;
		this.subscribedTopics = subscribedTopics;
	}
}

export default User;
