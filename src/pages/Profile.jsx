import React, { useContext, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../API/PostService';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import { updateProfile } from '../storeRedux/profileReducer';
import { clearPostData } from '../storeRedux/postReducer';
import { clearApiAction } from '../storeRedux/apiReducer';
import { clearEmailAction } from '../storeRedux/emailReducer';
import { clearProfile } from '../storeRedux/profileReducer';
import "../styles/Profile.css"

const Profile = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const dispatch = useDispatch()
	const logout = () => {
		setIsAuth(false);
		dispatch(clearPostData())
		dispatch(clearApiAction())
		dispatch(clearEmailAction())
		dispatch(clearProfile())
		localStorage.removeItem('auth')
	}

	const {email, name, api} = useSelector(state => state.profileState)
	const [apiInput, setApiInput] = useState(api)
	const [emailInput, setEmailInput] = useState(email)
	const [nameInput, setNameInput] = useState(name)
	const [response, setResponse] = useState(null)

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