import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import TopicFollowButton from "./TopicFollowButton";
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
				<TopicFollowButton
					isFollowedTopic={isFollowedTopic}
					setReload={setReload}
					topicId={topicId}
					topicName={topicName}
				/>
			</Typography>

			<Typography variant="h6">
				{description}
			</Typography>
		</>
	);
};

TopicHeaderSection.propTypes = {
	description: PropTypes.string.isRequired,
	reload: PropTypes.bool.isRequired,
	setReload: PropTypes.func.isRequired,
	topicId: PropTypes.string.isRequired,
	topicName: PropTypes.string.isRequired
};

export default TopicHeaderSection;
