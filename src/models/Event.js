class Event {
	constructor(id, hostId, name, place, time, description, topicId, imageUrl) {
		this.id = id;
		this.hostId = hostId;
		this.topicId = topicId;
		this.name = name; //*
		this.place = place; //*
		this.time = time; //*
		this.description = description; // atleast one
		this.imageUrl = imageUrl; // atleast one
	}
}

export default Event;
