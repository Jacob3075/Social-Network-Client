import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import TopicFollowButton from "../topics/TopicFollowButton";
import { userService } from "../../services/UserService";

const TopicHeaderSection = ({ topicName, description, topicId, reload, setReload }) => {
	const [isFollowedTopic, setIsFollowedTopic] = useState(false);

	useEffect(() => {
		setIsFollowedTopic(userService.getFollowedTopics().includes(topicId));
	}, [reload]);

	return (
		<>
			<Typography variant="h4" color="textPrimary">
				{topicName + "\xa0\xa0"}
			</Typography>

			<TopicFollowButton
				isFollowedTopic={isFollowedTopic}
				setReload={setReload}
				topicId={topicId}
				topicName={topicName}
			/>
			<Typography variant="h6">
				{description}
			</Typography>
		</>
	);
};

export default TopicHeaderSection;
