import React, { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { userService } from "../../services/UserService";
import TopicFollowButton from "./TopicFollowButton";

const TopicsListItem = ({ id, topicName, createdUserId, description, setReload, reload }) => {
	const history = useHistory();

	const [isFollowedTopic, setIsFollowedTopic] = useState(false);

	useEffect(() => {
		setIsFollowedTopic(userService.getFollowedTopics().includes(id));
	}, [reload]);

	const goToTopicPage = () => {
		setReload(true);
		history.push(`/topic/${id}`);
	};

	return (
		<Paper>
			<ListItem button>
				<ListItemText primary={topicName} secondaryText={description} onClick={goToTopicPage} />
				<TopicFollowButton isFollowedTopic={isFollowedTopic} setReload={setReload} topicId={id} topicName={topicName} />
			</ListItem>
		</Paper>
	);
};

export default TopicsListItem;
