import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Profile = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth')
	}


	return (
		<div>
			<Link to="/posts">Posts</Link>
			<h1>Hi You are logged in</h1>
			<MyButton onClick={logout}>Logout</MyButton>
		</div>
	);
};

export default Profile;