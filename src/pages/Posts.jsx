import React, {useEffect, useState, useRef} from 'react';
import PostList from '../components/PostList/PostList';
import Loader from '../components/UI/loader/Loader';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter/PostFilter';
import {useFetching} from "../hooks/useFetching";
import { useDispatch, useSelector } from 'react-redux';
import { postsDataUpdate } from '../store/postReducer';
import '../styles/Posts.css'

function Posts() {
	const {articles, search} = useSelector(state => state.postsDataReducer);
	const dispatch = useDispatch();
	const lastElement = useRef();

		const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
			if (search === "") {
		const response = await PostService.getAllTopNews();
		dispatch(postsDataUpdate({articles: [...response.data.articles]}))
			}
	})

	useEffect(() => {
		fetchPosts()
	}, [] )


  return (
    <div className="posts">
			<div className='post_content'>
			<PostFilter></PostFilter>
			{postError &&
			<h1>Something went wrong. System error - {postError}</h1>
			}
			<PostList posts={articles} title="Recently news"></PostList>
			<div ref={lastElement} style={{height: 20}}></div>
			{isPostsLoading &&
				<Loader></Loader>
			}
			</div>
    </div>
  );
}

export default Posts;
