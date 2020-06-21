import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
	baseURL: config.baseUrl
});

axiosInstance.interceptors.request.use((req) => {
	req.headers['Authorization'] = `Bearer ${JSON.parse(
		localStorage.getItem('token')
	)}`;
	req.headers['Content-Type'] = 'application/json';
	console.log(req);
	return req;
});

export default axiosInstance;
