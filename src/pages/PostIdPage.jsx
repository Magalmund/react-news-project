import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/PostIdPage.css'

const PostIdPage = (props) => {
	const {selectedArticle} = useSelector(state => state.postsDataReducer)

	return (
			<div className='post_full'>
				<div className='post_full_content'>
				<h2>{JSON.stringify(selectedArticle.title).replace(/^"(.*)"$/, '$1')}</h2>
				<p>{JSON.stringify(selectedArticle.content).replace(/^"(.*)"$/, '$1')}</p>
				<span>{JSON.stringify(selectedArticle.author).replace(/^"(.*)"$/, '$1')}</span>
				<span>See full post: <a href={JSON.stringify(selectedArticle.url).replace(/^"(.*)"$/, '$1')} target="_blank">News link</a></span>
				</div>
			</div>
	);
};

export default PostIdPage;