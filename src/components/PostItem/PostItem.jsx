import React from 'react';
import MyButton from '../UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postsDataUpdate } from '../../store/postReducer';
import '../PostItem/PostItem.css'

const PostItem = (props) => {
	const router = useNavigate()
	const dispatch = useDispatch()
	return (
		<div className='post_item'>
			<div className='post_item_box'>
				<div className='post_item_content'>
					<h3>{props.post.title}</h3>
					<p>
						{props.post.description}
					</p>
				</div>
				<div className='post_btns'>
					<MyButton onClick={() => {
						dispatch(postsDataUpdate({selectedArticle: props.post}))
						router(`/post`)
						}}>Открыть</MyButton>
				</div>
			</div>
		</div>
	);
};

export default PostItem;