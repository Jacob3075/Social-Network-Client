import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory } from "react-router-dom";
import { getPostsFromFollowedTopics } from "../../services/PostService";

const HomePage = () => {
	let imageSource = "/public/logo.png";
	const history = useHistory();

	const [postList, setPostList] = useState([]);
	const [hasMoreItems, setHasMoreItems] = useState(true);

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");
	}, []);

	const loadMoreData = (pageNumber) => {
		if (!userService.isLoggedIn()) {
			setHasMoreItems(false);
			return;
		}

		getPostsFromFollowedTopics(pageNumber, 10)
			.then((response) => {
				if (response.length > 0) {
					const newPosts = response;
					setPostList(postList.concat(newPosts));
					if (newPosts.length === 0) {
						setHasMoreItems(false);
					}
				} else setHasMoreItems(false);
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<MyAppBar title="" />
			<MainContent
				postList={postList}
				loadMoreData={loadMoreData}
				hasMoreItems={hasMoreItems}
			/>
		</>
	);
};

export default HomePage;
