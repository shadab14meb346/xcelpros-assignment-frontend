import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_START,
	LOGIN_START,
	INVALID_FORM
} from './types';

export function loginSuccess(user, token) {
	return {
		type: LOGIN_SUCCESS,
		token,
		user
	};
}
export function loginFailure(error) {
	return {
		type: LOGIN_FAILURE,
		error
	};
}
export function signupSuccess(success) {
	return {
		type: SIGNUP_SUCCESS,
		success
	};
}
export function signupFailure(error) {
	return {
		type: SIGNUP_FAILURE,
		error
	};
}
export function signupStart() {
	return {
		type: SIGNUP_START
	};
}
export function loginStart() {
	return {
		type: LOGIN_START
	};
}
export function invalidForm(message) {
	return {
		type: INVALID_FORM,
		message
	};
}
