import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);

	if(isLoading){
		return <Loader></Loader>
	}
	return (
		isAuth
		?
		<Routes>
		{privateRoutes.map(({ name, component }, i) => (
			<Route
				key={i}
				path={name}
				element={component}
			/>
		))}
		<Route
        path="*"
        element={<Navigate to="/posts" replace />}
    />
	</Routes>
		:
		<Routes>
		{publicRoutes.map(({ name, component }, i) => (
			<Route
				key={i}
				path={name}
				element={component}
			/>
		))}
		<Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
		</Routes>
	);
};

export default AppRouter;


