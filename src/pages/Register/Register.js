import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import { register } from '../../http/user';
import { signupSuccess, signupFailure, signupStart } from '../../actions/user';
import './Register.css';

const handleChange = (e, setState) => {
	setState(e.target.value);
};
const Register = ({ dispatch, error, registered, loading }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState();

	const handleSubmit = async () => {
		//action loadings
		dispatch(signupStart());
		const res = await register(name, email, password);
		const { success } = res;
		if (success) {
			dispatch(signupSuccess('Registered successfully'));
		} else {
			dispatch(signupFailure('Registration failed'));
		}
	};
	return (
		<div className="main">
			{/* {isLoggedIn ? <Redirect to="/dashboard" /> : null} */}
			<div className="main__item">
				<h1 className="heading">Sign-up</h1>
			</div>
			<div className="main__item">
				Already have an account? <a href="/login">Login</a>
			</div>
			{registered ? (
				<div className="main__item success">Registered Successfully</div>
			) : null}
			<div className="main__item form">
				<label>Name</label>
				<Input onChange={(e) => handleChange(e, setName)} type="text" />
				<label>Email address</label>
				<Input onChange={(e) => handleChange(e, setEmail)} type="text" />
				<label>Password</label>
				<Input onChange={(e) => handleChange(e, setPassword)} type="password" />
				<button className="button" onClick={handleSubmit}>
					{loading ? 'Joining...' : 'Join our community'}
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
		registered: state.user.registered,
		loading: state.user.loading
	};
};

export default connect(mapStateToProps)(Register);
