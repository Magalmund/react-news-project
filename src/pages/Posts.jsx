import React, {useEffect, useState, useRef} from 'react';
import PostList from '../components/PostList';
import Loader from '../components/UI/loader/Loader';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import { getPageCount, getPagesArray } from '../utils/pages';
import { useObserver } from '../hooks/useObserver';

function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
 let pagesArray = getPagesArray(totalPages);

	const lastElement = useRef();
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data])
			const totalCount = response.headers['x-total-count']
			setTotalPages(getPageCount(totalCount, limit));
	})
	
	useObserver(lastElement, page < totalPages, isPostsLoading, () => {
		setPage(page + 1)
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page] )

	useEffect(() => {
		fetchPosts()
	}, [] )


  return (
    <div className="App">
			<hr style={{margin: '15px 0'}}/>
			<PostFilter filter={filter} setFilter={setFilter}></PostFilter>
			{postError &&
			<h1>Произошла ошибка ${postError}</h1>
			}
			<PostList posts={sortedAndSearchedPosts} title="Список постов"></PostList>
			<div ref={lastElement} style={{height: 20, background: 'red'}}></div>
			{isPostsLoading &&
				<Loader></Loader>
			}
    </div>
  );
}

export default Posts;
