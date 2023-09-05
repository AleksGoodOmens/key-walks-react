import { NavLink } from 'react-router-dom';

import SvgIcon from '../../../assets/SvgIcon';

import styles from './footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					<li>
						<NavLink to={'/'}>
							<SvgIcon name="home" />
							<div>Home</div>
						</NavLink>
					</li>
					<li>
						<NavLink to={'/walks'}>
							<SvgIcon name="key" />
							<div>Walks</div>
						</NavLink>
					</li>
					<li>
						<a href="tel:+447838944800">
							<SvgIcon name="phone" />
							<div>Contact</div>
						</a>
					</li>
					<li>
						<NavLink to={'/tickets'}>
							<SvgIcon name="ticket" />
							<div>Tickets</div>
						</NavLink>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
