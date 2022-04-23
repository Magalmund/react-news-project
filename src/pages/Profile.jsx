import React, { useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PostService from '../API/PostService';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import { updateProfile } from '../store/profileReducer';

const Profile = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}

	const {email, name, api} = useSelector(state => state.profileState)
	const [apiInput, setApiInput] = useState(api)
	const [emailInput, setEmailInput] = useState(email)
	const [nameInput, setNameInput] = useState(name)
	const [response, setResponse] = useState(null)
	const dispatch = useDispatch()

	return (
		<div>
			<Link to="/posts">Posts</Link>
			<h1>Hi You are logged in</h1>

			{response !== null ? response.message : <></>}
			{/* Добавить подсказки для полей ввода */}
			<MyInput
			value={apiInput}
			onChange={e => {setApiInput(e.target.value)}}
			placeholder="API"
			>
			</MyInput>
			<MyInput
			value={emailInput}
			onChange={e => {setEmailInput(e.target.value)}}
			placeholder="Email"
			>
			</MyInput>
			<MyInput
			value={nameInput}
			onChange={e => {setNameInput(e.target.value)}}
			placeholder="Name"
			>
			</MyInput>
			<MyButton
			onClick={async () => {
				const response = await PostService.updateProfileData({api: apiInput, email: emailInput, name: nameInput})
				dispatch(updateProfile({api: apiInput, email: emailInput, name: nameInput}))
				setResponse(response)
			}}
			>
			Save
			</MyButton>
			<MyButton onClick={logout}>Logout</MyButton>
		</div>
	);
};

export default Profile;