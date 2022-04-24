import React from 'react';
import PostItem from '../PostItem/PostItem';
import '../PostList/PostList.css'

const PostList = ({posts, title}) => {
	if(!posts.length){
		return (
			<h1>News not found</h1>
		)
	}
	return (
		<div className='post_list posts_content_pd'>
			<h1>{title}</h1>
			{posts.map((post) =>
				<PostItem post={post} key={post.id}></PostItem>
			)}
		</div>
	);
};

export default PostList;