import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Post from "./Post";

const PostsFeed = ({ loadPosts, reload, setReload }) => {
	const { topicId } = useParams();
	const [postListComponents, setPostListComponents] = useState([]);

	useEffect(() => {
		loadPosts()
			.then((posts) =>
				posts.map((post) => <Post key={post.id} {...post} setReload={setReload} />)
			)
			.then((posts) => {
				setPostListComponents(posts);
				setReload(false);
			})
			.catch((error) => console.log(error));
	}, [reload]);

	return <>{postListComponents}</>;
};

export default PostsFeed;
