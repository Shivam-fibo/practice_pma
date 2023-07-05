import { useState } from 'react';
import forgotImages from '../../assets/images/forgot.png';
const ForgotPassPage = () => {
	const [ data, setEmail ] = useState({
		email: '',
		error: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEmail({
			...data,
			[name]: value
		});
	};

	const forgotPasswordFun = (e) => {
		e.preventDefault();
		const { email } = data;

		if (!email) {
			setEmail({
				...data,
				error: 'Please fill in the email field.'
			});
		} else {
			// Display an alert with the email value
			window.alert(`Link has been sent to your email: ${email}`);

			// Clear the email input field and error message
			setEmail({
				email: '',
				error: ''
			});
		}

		{
			/*setEmail({
			...data,
			email: email
		});*/
		}
	};

	return (
		<div className="font-mono">
			<div className="box mx-auto ">
				<div className="flex justify-center px-6 my-7">
					<div className="w-full xl:w-3/4 lg:w-11/12 flex mt-20">
						<div>
							<img src={forgotImages} alt="Image description" class="hidden lg:block" />
						</div>

						<div className="w-full lg:w-1/2 bg-white p-6 rounded-lg lg:rounded-l-none">
							<div className="px-2 mb-4 text-center">
								<h3 className="pt-12 mb-2 text-2xl font-sans">Forgot Your Password?</h3>
								<p className="mb-4 text-sm text-gray-700 font-sans">
									We get it, stuff happens. Just enter your email address below and we'll send you a
									link to reset your password!
								</p>
							</div>
							<form
								className="px-8 pt-6 pb-8 mb-4 bg-white rounded font-sans"
								onSubmit={forgotPasswordFun}
							>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="email"
										type="email"
										value={data.email}
										onChange={handleChange}
										placeholder="Enter Email Address..."
									/>
								</div>
								<div className="mb-6 text-center">
									<button
										style={{ backgroundColor: 'var(--button-color)' }}
										className="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
										type="button"
										onClick={forgotPasswordFun}
									>
										Reset Password
									</button>
								</div>
								<hr className="mb-6 border-t" />
								<div className="text-center">
									<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
										Create an Account!
									</a>
								</div>
								<div className="text-center">
									<a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
										Already have an account? Login!
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassPage;
