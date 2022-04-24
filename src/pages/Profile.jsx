import React, { useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../API/PostService';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import { updateProfile } from '../store/profileReducer';
import "../styles/Profile.css"

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
		<div className='profile'>
			<div className='profile_content'>
				<h1>User data</h1>
				{response !== null ? response.message : <></>}
				<MyInput
				value={nameInput}
				onChange={e => {setNameInput(e.target.value)}}
				placeholder="Name"
				>
				</MyInput>
				<MyInput
				value={emailInput}
				onChange={e => {setEmailInput(e.target.value)}}
				placeholder="Email"
				>
				</MyInput>
				<MyInput
				value={apiInput}
				onChange={e => {setApiInput(e.target.value)}}
				placeholder="API"
				>
				</MyInput>
				<div className='button_container'>
					<MyButton
					onClick={async () => {
						const response = await PostService.updateProfileData({api: apiInput, email: emailInput, name: nameInput})
						dispatch(updateProfile({api: apiInput, email: emailInput, name: nameInput}))
						setResponse(response)
					}}
					>
					Save
					</MyButton>
					<MyButton
						onClick={logout}
					>
						Logout
					</MyButton>
				</div>
			</div>
		</div>
	);
};

export default Profile;