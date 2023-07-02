import { toggleSidebar } from '../../api_utils/geditor_utils';

function TopNav() {
	const handleClick = () => {
		toggleSidebar(false);
	};
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<button className="btn btn-sm btn-outline-primary" onClick={handleClick}>
					<i className="fa fa-bars" />
				</button>
				<div className="panel__devices" />
				<div className="panel__editor" />
				<div className="panel__basic-actions" />
			</div>
		</nav>
	);
}

export default TopNav;
