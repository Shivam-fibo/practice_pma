import axios from 'axios';
const BASE_URL = 'http://localhost:8080';

//signup
export async function userSignUp(data) {
	return await axios.post(`${BASE_URL}/pma/api/v1/auth/signup`, data);
}

//sigin
export async function userLogin(data) {
	return await axios.post(`${BASE_URL}/pma/api/v1/auth/signin`, data);
}
