import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostService from "../../services/PostService";
import Post from "../Post";

const InfiniteScrollList = ({ userId }) => {
	const [postList, setPostList] = useState([]);
	const [hasMoreItems, setHasMoreItems] = useState(true);

	// const loadPostList = (page) => {
	// 	PostService.getList(page)
	// 		.then((res) => {
	// 			const newList = postList.concat(res.data);
	// 			setPostList(newList);
	//
	// 			if (res.data.length === 0) {
	// 				setHasMoreItems(false);
	// 			} else {
	// 				setHasMoreItems(true);
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const loadMoreData = (pageNumber) => {
		const newPosts = PostService.mockGetPosts(pageNumber);
		const updatedPostsList = postList.concat(newPosts);
		setPostList(updatedPostsList);

		if (newPosts.length === 0) {
			setHasMoreItems(false);
		}
	};

	let postComponents = postList.map((post, index) => (
		<Post key={index} {...post} userId={userId} />
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

export default InfiniteScrollList;
