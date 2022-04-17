import React from 'react';
import {Link} from "react-router-dom";

const navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar_links">
				<Link to='/posts'>Posts</Link>
				<Link to='/profile'>Profile</Link>
				<Link to='/about'>About</Link>
			</div>
		</div>
	);
};

export default navbar;