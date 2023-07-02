import React, { useState } from 'react';
import LogIn from '../../components/Login/Login';
import SignUp from '../../components/Signup/SignUp';
const LoginPage = () => {
	const [ toggleLogin, setToggleLogin ] = useState(true);
	const handleToggle = () => {
		setToggleLogin((pre) => !pre);
	};

	return (
		<div>
			{toggleLogin ? (
				<LogIn toggleLogin={toggleLogin} handleToggle={handleToggle} />
			) : (
				<SignUp toggleLogin={toggleLogin} handleToggle={handleToggle} />
			)}
		</div>
	);
};

export default LoginPage;
