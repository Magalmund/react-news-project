import React from 'react';
import classes from './Loader.module.css';

const loader = () => {
	return (
		<div className={classes.loader_row}>
			<div className={classes.loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default loader;