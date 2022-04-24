import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../../API/PostService';
import { postsDataUpdate } from '../../store/postReducer';
import MyButton from '../UI/button/MyButton';
import MyInput from "../UI/input/MyInput"
import '../PostFilter/PostFilter.css'

const PostFilter = () => {
	const {search} = useSelector(state => state.postsDataReducer)
	const dispatch = useDispatch()

	

	return (
		<form onSubmit={e => {
			e.preventDefault();
			if (search && search !== "") {
			PostService.searchAllTopNews(search).then(res => {
				dispatch(postsDataUpdate({articles: res.data.articles}))
			})
		}
		}} className='post_filter posts_content_pd'>
				<MyInput
					value={search}
					onChange={e => {
						dispatch(postsDataUpdate({search: e.target.value}))
					}}
					placeholder="Search"
				>
				</MyInput>
				<MyButton
					onClick={e => {
						e.preventDefault();
						if (search && search !== "") {
						PostService.searchAllTopNews(search).then(res => {
							dispatch(postsDataUpdate({articles: res.data.articles}))
						})
					}
					}}
				>
					Search
				</MyButton>
			</form>
	);
};

export default PostFilter;