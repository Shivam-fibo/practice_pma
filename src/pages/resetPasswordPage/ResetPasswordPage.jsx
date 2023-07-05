import { useState } from 'react';
import resetImages from '../../assets/images/reset.png';
const ResetPassPage = () => {
	const [ data, setData ] = useState({
		email: '',
		newpass: '',
		cnfpass: '',
		error: ''
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};

	const resetPasswordFun = (e) => {
		e.preventDefault();
		const { email, cnfpass, newpass } = data;

		if (!email) {
			setData({
				...data,
				error: 'Please fill in the email field.'
			});
		} else if (!newpass) {
			setData({
				...data,
				error: 'Please fill in the new password field.'
			});
		} else if (!cnfpass) {
			setData({
				...data,
				error: 'Please fill in the confirm password field.'
			});
		} else {
			setData({
				...data,
				error: 'Password Changed Successful'
			});
		}
	};
	return (
		<div className="font-mono">
			<div className="box mx-auto ">
				<div className="flex justify-center px-6 my-7">
					<div className="w-full xl:w-3/4 lg:w-11/12 flex mt-14">
						<div>
							<img src={resetImages} alt="Image description" class="hidden lg:block" />
						</div>

						<div className="w-full mt-12 lg:w-1/2 bg-white p-6 rounded-lg lg:rounded-l-none">
							<div className="px-2 mb-4 text-center">
								<h3 className="pt-6 mb-0 text-2xl font-sans">Change Password?</h3>
								{/*<p className="mb-4 text-sm text-gray-700 font-sans">
								We get it, stuff happens. Just enter your email address below and we'll send you a
								link to reset your password!
							</p>*/}
							</div>
							<form
								className="px-8 pt-6 pb-8 mb-2 bg-white rounded font-sans"
								onSubmit={resetPasswordFun}
							>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" for="email">
										Email
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="email"
										type="email"
										value={data.email}
										onChange={handleChange}
										placeholder="Enter Email Address..."
									/>
									<label className="block mb-2 text-sm font-bold text-gray-700" for="newpass">
										New Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="newpass"
										type="password"
										value={data.newpass}
										onChange={handleChange}
										placeholder="Enter New Password..."
									/>
									<label className="block mb-2 text-sm font-bold text-gray-700" for="cnfpass">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										name="cnfpass"
										type="password"
										value={data.cnfpass}
										onChange={handleChange}
										placeholder="Confirm Password..."
									/>
								</div>
								<div className="mb-6 text-center">
									<button
										style={{ backgroundColor: 'var(--button-color)' }}
										className="w-full px-4 py-2 font-bold text-white
									rounded-full focus:outline-none focus:shadow-outline"
										type="button"
									>
										Reset Password
									</button>
									<a class="inline-block text-sm mt-3 text-blue-500 align-baseline hover:text-blue-800">
										Return to Login?
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
export default ResetPassPage;
