import React from 'react';
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postsDataUpdate } from '../store/postReducer';

const PostItem = (props) => {
	const router = useNavigate()
	const dispatch = useDispatch()
	return (
		<div className='post'>
			<div className='post_content'>
				<strong>{props.post.title}</strong>
				<div>
					{props.post.description}
				</div>
			</div>
			<div className='post_btns'>
				<MyButton onClick={() => {
					dispatch(postsDataUpdate({selectedArticle: props.post}))
					router(`/post`)
					}}>Открыть</MyButton>
			</div>
		</div>
	);
};

export default PostItem;