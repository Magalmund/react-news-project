import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import { addApiAction } from '../store/apiReducer'
import { addEmailAction } from '../store/emailReducer'

const Login = () => {
	// const {isAuth, setIsAuth} = useContext(AuthContext);
	// const login = event => {
	// 	event.preventDefault();
	// 	setIsAuth(true)
	// 	localStorage.setItem('auth', 'true')
	// }

	const preventD = event => {
		event.preventDefault();
	}
	const [apiInput, setApiInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const addUserData = () => {
		dispatch(addApiAction(apiInput))
		dispatch(addEmailAction(emailInput))
		console.log(api);
		console.log(email);
	}

	const dispatch = useDispatch()
	const api = useSelector(state => state.api)
	const email = useSelector(state => state.email)
	console.log(api);
	console.log(email);
	return (
		<div>
				<h1>Login</h1>
				{/* <form onSubmit={login}></form> */}
				<form onSubmit={preventD}>
					<MyInput
						value={emailInput}
						onChange={e => setEmailInput(e.target.value)}
						type="text"
						placeholder="Email"
					>
					</MyInput>
					<MyInput
						value={apiInput}
						onChange={e => setApiInput(e.target.value)}
						type="text"
						placeholder="API key"
					>
					</MyInput>
					<MyButton onClick={() => addUserData()}>Enter</MyButton>
				</form>
		</div>
	);
};

export default Login;