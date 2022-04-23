import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../API/PostService';
import { postsDataUpdate } from '../store/postReducer';
import MyButton from './UI/button/MyButton';
import MyInput from "./UI/input/MyInput"
import MySelect from './UI/select/MySelect';

const PostFilter = () => {
	const {search} = useSelector(state => state.postsDataReducer)
	const dispatch = useDispatch()

	return (
		<div>
				<MyInput
					value={search}
					onChange={e => {
						dispatch(postsDataUpdate({search: e.target.value}))
					}}
					placeholder="Поиск..."
				>
				</MyInput>
				<MyButton
					onClick={e => {
						if (search && search !== "") {
						PostService.searchAllTopNews(search).then(res => {
							dispatch(postsDataUpdate({articles: res.data.articles}))
						})
					}
					}}
				>
					Search
				</MyButton>
				
				{/* <MySelect
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					defaultValue="Сортировка"
					options={[
						{value:'title', name: 'По названию'},
						{value:'body', name: 'По описанию'},
					]}
				>
				</MySelect> */}
			</div>
	);
};

export default PostFilter;