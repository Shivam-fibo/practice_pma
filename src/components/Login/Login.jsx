import React, { useState, useEffect } from 'react';
import { userLogin } from '../../API/Auth';
import login from '../../assets/images/login.png';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const handleGoogleLoginSuccess = (response) => {
	console.log(response);
};

const handleGoogleLoginFailure = (response) => {
	console.error(response);
};
const Login = ({ toggleLogin, handleToggle }) => {
	const navigate = useNavigate();
	const [ data, setData ] = useState({
		userNameOrEmail: '',
		password: '',
		error: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};

	useEffect(() => {
		const accessToken = localStorage.getItem('pmaToken');
		if (accessToken) {
			navigate('/');
			console.log('User is already logged in.');
		}
	}, []);

	const isValidEmail = (email) => {
		// Regular expression pattern for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Test the email against the pattern
		return emailPattern.test(email);
	};

	const loginFun = (e) => {
		e.preventDefault();
		const { userNameOrEmail, password } = data;

		if (!userNameOrEmail) {
			setData({
				...data,
				error: 'Please fill in the userName or email field.'
			});
			return;
		}

		if (!password) {
			setData({
				...data,
				error: 'Please fill in the Password field.'
			});
			return;
		}

		const isEmail = isValidEmail(userNameOrEmail);
		const dataToPost = {
			[isEmail ? 'email' : 'userName']: userNameOrEmail,
			password: password
		};

		// Checking if the user is already logged in
		const accessToken = localStorage.getItem('pmaToken');
		if (accessToken) {
			setData({
				...data,
				error: 'User is already logged in.'
			});
			navigate('/');
			return;
		}

		userLogin(dataToPost)
			.then((res) => {
				console.log('Login data is ' + JSON.stringify(res.data));
				console.log(`This is the response created by jayesh ${res.data.accessToken}`);

				localStorage.setItem('pmaToken', res.data.accessToken);
				localStorage.setItem('pmaUser', res.data.userName);
				setData({
					...data,
					error: 'Login is successful'
				});
			})
			.then(() => {
				const accessToken = localStorage.getItem('pmaToken');
				if (accessToken) {
					navigate('/');
					console.log('User is already logged in.');

					// Redirect or perform any necessary action for an authenticated user
				}
			})
			.catch((error) => {
				console.log('Error occurred during login ' + JSON.stringify(error));
				console.log(JSON.stringify(error.message));
			});

		setData({
			...data,
			userNameOrEmail: '',
			password: ''
		});

		setTimeout(() => {
			setData({
				...data,
				error: ''
			});
		}, 3000);
	};

	return (
		<div className={`login_box ${toggleLogin ? 'active' : 'inactive'}`}>
			<h2 className="login">Log in</h2>
			<div className="container_login">
				<div className="container_right">
					<img src={login} alt="" />
				</div>
				<div className="container_left">
					<form onSubmit={loginFun}>
						<div className="google">
							<GoogleLogin
								clientId="website-builder-390111"
								buttonText="Continue with Google"
								onSuccess={handleGoogleLoginSuccess}
								onFailure={handleGoogleLoginFailure}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
						<h5 className="or_login">or</h5>
						<div>
							<input
								type="text"
								name="userNameOrEmail"
								onChange={handleChange}
								className="email p_l"
								placeholder="Username or Email"
								value={data.userNameOrEmail}
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								className="password p_l"
								placeholder="Password"
								value={data.password}
								onChange={handleChange}
							/>
						</div>
						<button className="login_btn" type="submit">
							Log In
						</button>
						<div className="signupLink">
							Don't have an account? <b className="signupLinkText" onClick={handleToggle}>Sign Up</b>
						</div>
						{data.error && <div className="error">{data.error}</div>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
