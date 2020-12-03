import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Post from "./Post";

const PostsFeed = ({ postList, loadMoreData, hasMoreItems }) => {
	const postComponents = postList.map((post, index) => <Post key={index} {...post} />);

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
