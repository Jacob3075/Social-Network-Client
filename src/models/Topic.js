class Topic {
	constructor(
		id,
		name,
		creatorId,
		postId,
		eventId,
		description,
	) {
		this.id = id;
		this.creatorId = creatorId;
		this.postIds = postId;
		this.eventIds = eventId;
		this.name = name; //*
		this.description = description; //*
	}
}

export default Topic;
