class Topic {
	constructor(
		id,
		name,
		creatorId,
		memberIds,
		postIds,
		eventIds,
		description
	) {
		this.id = id;
		this.name = name;
		this.creatorId = creatorId;
		this.memberIds = memberIds;
		this.postIds = postIds;
		this.eventIds = eventIds;
		this.description = description;
	}
}

export default Topic;
