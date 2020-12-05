import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Post from "./Post";

const PostsFeed = ({ loadPosts, reload, setReload }) => {
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

PostsFeed.propTypes = {
	loadPosts: PropTypes.func.isRequired,
	reload: PropTypes.bool.isRequired,
	setReload: PropTypes.func.isRequired
};

export default PostsFeed;
