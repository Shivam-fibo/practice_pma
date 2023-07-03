import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import DarkMode from '../DarkMode/DarkMode';

function NavBar() {
	const [ click, setClick ] = useState(false);
	const [ login, setLogin ] = useState(true);

	const handleClick = () => {
		if (click) {
			setClick(false);
		}
	};

	return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						CodeBucks
						<i className="fas fa-code" />
					</NavLink>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/editor"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Try Now
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<a href="#footer" activeClassName="active" className="nav-links" onClick={handleClick}>
								Contact Us
							</a>
						</li>
						<li>
							{login ? (
								<div className="userIfNotLogin">
									<Link to="/auth">
										<button className="log_btn mr-4">Log In</button>
									</Link>
									<Link to="/auth">
										<button className="sign_btn">Sign Up</button>
									</Link>
								</div>
							) : (
								<div className="userIfLogin flex items-center">
									<Link to="/profile" className="flex items-center mr-4">
										<img className="userImage" src="" alt="" />
										<p className="userName ml-2">USER</p>
									</Link>
								</div>
							)}
						</li>
						{/* <DarkMode /> */}
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
