const dev = {
	baseUrl: 'http://localhost:5000/'
};

const prod = {
	baseUrl: 'http'
};

// const config = process.env.REACT_APP_ENV === 'dev' ? dev : prod;
const config = dev;
export default {
	...config,
	endpoints: {
		user: {
			login: '/auth/login',
			register: '/auth/register',
			getMe: '/auth/me',
			getAllRegisteredUsers: '/users/get-all-registered-users'
		}
	}
};
