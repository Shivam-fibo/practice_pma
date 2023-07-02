import React, { useEffect, useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
	const [ isDarkMode, setIsDarkMode ] = useState(false);

	const setDarkMode = () => {
		document.querySelector('body').setAttribute('data-theme', 'dark');
		localStorage.setItem('defaultTheme', 'dark');
	};

	const setLightMode = () => {
		document.querySelector('body').setAttribute('data-theme', 'light');
		localStorage.setItem('defaultTheme', 'light');
	};

	useEffect(() => {
		const defaultTheme = localStorage.getItem('defaultTheme');
		if (defaultTheme === 'dark') {
			setDarkMode();
			setIsDarkMode(true);
		} else {
			setLightMode();
			setIsDarkMode(false);
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			setLightMode();
			setIsDarkMode(false);
		} else {
			setDarkMode();
			setIsDarkMode(true);
		}
	};

	return (
		<div className="dark_mode">
			<div className="toggle-switch">
				<label id="label">
					<input
						type="checkbox"
						className="dark_mode_input input_class"
						id="darkmode-toggle"
						onChange={toggleTheme}
						checked={isDarkMode}
					/>
					<span className="slider" />
				</label>
			</div>
		</div>
	);
};

export default DarkMode;
