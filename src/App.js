import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App({ isLoggedIn }) {
	return (
		<div className="main">
			<Router>
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Register} />
				<PrivateRoute
					path="/dashboard"
					component={Dashboard}
					isLoggedIn={isLoggedIn}
				/>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn
	};
};

export default connect(mapStateToProps)(App);
