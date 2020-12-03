class Event {
	constructor(id, userId, topicId, time, name, description, location, registered) {
		this.id = id;
		this.userId = userId;
		this.topicId = topicId;
		this.time = time;
		this.name = name;
		this.description = description;
		this.location = location;
		this.registered = registered;
	}
}

export default Event;
