import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import { login } from '../../http/user';
import './Login.css';
import { loginSuccess, loginFailure, loginStart } from '../../actions/user';

const handleChange = (e, setState) => {
	setState(e.target.value);
};

const Login = ({ dispatch, history, isLoggedIn, error, loading }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async () => {
		dispatch(loginStart());
		const res = await login(email, password);
		const { success } = res;
		if (success) {
			const { user, token } = res;
			dispatch(loginSuccess(user, token));
			history.push('/dashboard');
		} else {
			dispatch(loginFailure('Invalid credentials'));
		}
	};
	return (
		<div className="main">
			{/* {isLoggedIn ? <Redirect to="/dashboard" /> : null} */}
			<div className="main__item">
				<h1 className="heading">Login</h1>
			</div>
			<div className="main__item">
				Don't have an account? <a href="/signup">Sign up</a>
			</div>
			<div className="main__item form">
				<label>Email address</label>
				<Input onChange={(e) => handleChange(e, setEmail)} type="text" />
				<label>Password</label>
				<Input onChange={(e) => handleChange(e, setPassword)} type="password" />
				<button className="button" onClick={handleSubmit}>
					{loading ? 'Logging...' : 'Login our community'}
				</button>
			</div>
			{error ? <div className="main__item error">{error}</div> : null}
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		error: state.user.error,
		isLoggedIn: state.user.isLoggedIn,
		loading: state.user.loading
	};
};

export default connect(mapStateToProps)(Login);
