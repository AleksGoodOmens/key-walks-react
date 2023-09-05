import { NavLink } from 'react-router-dom';
import SvgIcon from '../../../assets/SvgIcon';
import Burger from './burger/Burger';

function Header() {
	return (
		<header>
			<nav>
				<NavLink to="/">
					<SvgIcon name="logo" />
				</NavLink>
				<Burger />
			</nav>
		</header>
	);
}

export default Header;
