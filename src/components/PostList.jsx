import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title}) => {
	if(!posts.length){
		return (
			<h1>Посты не найдены!</h1>
		)
	}
	return (
		<div>
			<h1>{title}</h1>
			{posts.map((post) =>
				<PostItem post={post} key={post.id}></PostItem>
			)}
		</div>
	);
};

export default PostList;