import { useState } from 'react';
import signImages from '../../assets/images/signup.png';
import { GoogleLogin } from 'react-google-login';
import { userSignUp } from '../../API/Auth';
import view from '../../assets/images/view.png';
import './SignUp.css';

const handleGoogleLoginSuccess = (response) => {
	console.log(response);
};

const handleGoogleLoginFailure = (response) => {
	console.error(response);
};

const SignUp = ({ toggleLogin, handleToggle }) => {
	const [ data, setData ] = useState({
		name: '',
		userName: '',
		email: '',
		phone: '',
		password: '',
		reEnterPassword: '',
		error: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};

	const signUpFun = (e) => {
		e.preventDefault();

		const { name, userName, email, phone, password, reEnterPassword } = data;

		if (!name) {
			setData({
				...data,
				error: 'Please fill in the name field.'
			});
		} else if (!userName) {
			setData({
				...data,
				error: 'Please fill in the UserName field.'
			});
		} else if (!phone) {
			setData({
				...data,
				error: 'Please fill in the Number field.'
			});
		} else if (!email) {
			setData({
				...data,
				error: 'Please fill in the email field.'
			});
		} else if (!password) {
			setData({
				...data,
				error: 'Please fill in the Password field.'
			});
		} else if (!reEnterPassword) {
			setData({
				...data,
				error: 'Please fill in the reEnterPassword field.'
			});
		} else {
			setData({
				...data,
				error: 'SignUp Successful'
			});
		}

		if (data.password !== data.reEnterPassword) {
			setData({
				...data,
				error: 'Password do not match.'
			});
			return;
		}

		const dataToPost = {
			name: data.name,
			userName: data.userName,
			email: data.email,
			phone: data.phone,
			password: data.password
		};

		userSignUp(dataToPost)
			.then((res) => {
				console.log('Signup data is ' + JSON.stringify(res.data));
				console.log('signup is successful');
			})
			.catch((error) => {
				console.log('Error occurred during signup ' + JSON.stringify(error));
				console.log(JSON.stringify(error.message));
				setData({
					...data,
					error: 'Error occurred during signup'
				});
			});
		setData({
			name: '',
			userName: '',
			email: '',
			phone: '',
			password: '',
			reEnterPassword: ''
		});
	};

	return (
		<div className={`${toggleLogin ? 'inactive' : 'active'}`}>
			<h2 className="signup">Sign Up </h2>
			<div className="container_su">
				<div className="container_right_su">
					<img src={signImages} alt="" />
				</div>
				<div className="container_left_su">
					<form onSubmit={signUpFun}>
						<div className="google_su">
							<GoogleLogin
								clientId="website-builder-390111"
								buttonText="Continue with Google"
								onSuccess={handleGoogleLoginSuccess}
								onFailure={handleGoogleLoginFailure}
								cookiePolicy={'single_host_origin'}
							/>
						</div>
						<h5 className="or_su">or</h5>
						<div>
							<input
								type="text"
								name="name"
								className="text pl_su"
								placeholder="Name"
								value={data.name}
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="text"
								name="userName"
								className="text pl_su"
								placeholder="Username"
								value={data.userName}
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								className="email_su pl_su"
								placeholder="Email"
								value={data.email}
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="number"
								name="phone"
								className="number pl_su"
								placeholder="Phone Number"
								value={data.phone}
								onChange={handleChange}
								inputMode="numeric"
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								className="password_su pl_su"
								placeholder="Password"
								style={{ background: `url(${view})` }}
								value={data.password}
								onChange={handleChange}
							/>
						</div>
						<div>
							<input
								type="password"
								name="reEnterPassword"
								className="password_su pl_su"
								placeholder="Re-enter Password"
								style={{ background: `url(${view})` }}
								value={data.reEnterPassword}
								onChange={handleChange}
							/>
						</div>
						<button className="su_btn" type="submit">
							Create Account
						</button>
						{data.error && <div className="error">{data.error}</div>}
					</form>
					<div className="loginuplink">
						If already have account<b onClick={handleToggle}> Login</b>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
