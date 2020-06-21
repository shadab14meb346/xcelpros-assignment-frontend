import http from './API';
import config from '../config';

export async function login(email, password) {
	try {
		const res = await http.post(config.endpoints.user.login, {
			email,
			password
		});
		return res.data;
	} catch (error) {
		console.log(error);
		return error;
	}
}

export async function register(name, email, password) {
	try {
		const res = await http.post(config.endpoints.user.register, {
			name,
			email,
			password
		});
		return res.data;
	} catch (error) {
		return error.response.data;
	}
}

export async function getMe() {
	try {
		const res = await http.get(config.endpoints.user.getMe);
		return res.data;
	} catch (error) {
		return error.response.data;
	}
}

export async function getRegisteredUsers() {
	try {
		const res = await http.get(config.endpoints.user.getAllRegisteredUsers);

		console.log(res);
		return res.data;
	} catch (error) {
		return error.response.data;
	}
}
