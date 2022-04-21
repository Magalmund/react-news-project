import React from 'react';
import classes from './Navbar.module.css'
import {Link} from "react-router-dom";

const navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.navbar_links}>
				<Link to='/posts'>Posts</Link>
				<Link to='/profile'>Profile</Link>
				<Link to='/about'>About</Link>
			</div>
		</div>
	);
};

export default navbar;