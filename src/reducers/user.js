import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_START,
	LOGIN_START,
	INVALID_FORM
} from '../actions/types';

const initialState = {
	isLoggedIn: localStorage.getItem('token') !== null,
	loading: false,
	error: null,
	user: null,
	registered: null,
	formValidation: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS: {
			localStorage.setItem('token', JSON.stringify(action.token));
			return {
				...state,
				loading: false,
				user: action.user,
				isLoggedIn: true,
				error: null
			};
		}
		case LOGIN_FAILURE: {
			localStorage.removeItem('token');
			return {
				...state,
				loading: false,
				isLoggedIn: false,
				error: action.error
			};
		}
		case SIGNUP_SUCCESS: {
			return {
				...state,
				loading: false,
				registered: true
			};
		}
		case SIGNUP_FAILURE: {
			return {
				...state,
				loading: false,
				error: action.error
			};
		}
		case SIGNUP_START: {
			return {
				...state,
				loading: true
			};
		}
		case LOGIN_START: {
			return {
				...state,
				loading: true
			};
		}
		case INVALID_FORM: {
			return {
				...state,
				formValidation: action.message
			};
		}
		default: {
			return state;
		}
	}
}
