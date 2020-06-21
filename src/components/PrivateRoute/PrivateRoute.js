import React from 'react';
import { BrowserRouter as Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/signup" />
			}
		/>
	);
};

export default PrivateRoute;
