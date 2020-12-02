import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Post from "./Post";
import { getPostsFromFollowedTopics } from "../../services/PostService";
import { userService } from "../../services/UserService";

const PostsFeed = ({ userId }) => {
	const [postList, setPostList] = useState([]);
	const [hasMoreItems, setHasMoreItems] = useState(true);

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

	let postComponents = postList.map((post, index) => (
		<Post key={index} {...post} />
	));

	return (
		<>
			<InfiniteScroll
				pageStart={0}
				loadMore={loadMoreData}
				hasMore={hasMoreItems}
				loader={<div key={0}>LOADING</div>}
			>
				{postComponents}
			</InfiniteScroll>
		</>
	);
};

export default PostsFeed;
