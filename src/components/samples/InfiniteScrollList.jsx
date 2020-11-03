import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostService from "../../services/PostService";
import Post from "../Post";

const InfiniteScrollList = () => {
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

	const loadPostList = (pageNumber) => {
		const newPosts = PostService.mockGetPosts(pageNumber);
		const updatedPostsList = postList.concat(newPosts);
		setPostList(updatedPostsList);

		if (newPosts.length === 0) {
			setHasMoreItems(false);
		}
	};

	let posts = postList.map(post => <Post key={post.id} {...post} />);

	return (
		// <>
		// 	<div className="section">
		// 		<InfiniteScroll
		// 			threshold={0}
		// 			pageStart={0}
		// 			loadMore={loadUserList}
		// 			hasMore={hasMoreItems}
		// 			loader={<div className="text-center">loading data ...</div>}
		// 		>
		// 			{userList.map((user, i) => (
		// 				<div className="box m-3 user" key={i}>
		// 					<img src={user.avatar} alt={user.first_name} />
		// 					<div className="user-details">
		// 						<strong>Email</strong>: {user.email}
		// 						<br />
		// 						<strong>First Name</strong>: {user.first_name}
		// 						<br />
		// 						<strong>Last Name</strong>: {user.last_name}
		// 						<br />
		// 					</div>
		// 				</div>
		// 			))}
		// 		</InfiniteScroll>
		// 		{hasMoreItems ? (
		// 			""
		// 		) : (
		// 			<div
		// 				className="tex
		// 			t-center"
		// 			>
		// 				no data anymore ...
		// 			</div>
		// 		)}
		// 	</div>
		// </>

		<>
			<InfiniteScroll
				threshold={0}
				pageStart={0}
				loadMore={loadPostList}
				hasMore={hasMoreItems}
				loader={<>LOADING</>}
			>
				{posts}
			</InfiniteScroll>
		</>
	);
};

export default InfiniteScrollList;
