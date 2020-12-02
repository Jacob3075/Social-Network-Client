class Topic {
	constructor(
		id,
		topicName,
		createdUserId,
		description,
	) {
		this.id = id;
		this.createdUserId = createdUserId;
		this.topicName = topicName;
		this.description = description;
	}
}

export default Topic;
