import { toggleSidebar } from '../../api_utils/geditor_utils';
import {useNavigate} from 'react-router-dom'

function TopNav() {
	const navigate=useNavigate()
	const handleClick = () => {
		// toggleSidebar(false);
		navigate('/')
	};
	

	return (
		<nav className="d-flex">
			<button className="ml-5" onClick={handleClick}>
				<i className="fa fa-arrow-left" />
			</button>
			<div className="ml-60">
				
				<div className="panel__devices" />
				<div className="panel__editor" />
				<div className="panel__basic-actions" />
			</div>
		</nav>
	);
}

export default TopNav;
