import { Link, NavLink } from 'react-router-dom';
import SvgIcon from '../../../assets/SvgIcon';
import Burger from './burger/Burger';

import styles from './header.module.scss';
import { useEffect, useState } from 'react';

function Header({ color }) {
	const [walks, setWalks] = useState([
		{ name: 'new walk', subtitle: 'subtitle' },
	]);

	useEffect(() => {
		setWalks([
			{
				name: `king's cross`,
				subtitle: 'From Gasholders to Google',
			},
			{
				name: 'islington',
				subtitle: 'Islington Through the ages',
			},

			{
				name: 'through the ages',
				subtitle: `"Through the Ages" Walking Tour: A Timeless Journey through London's History`,
			},
			{
				name: 'london dungeon',
				subtitle: `London Dungeon Walking Tour: A Hauntingly Thrilling Adventure`,
			},
			{
				name: 'jack the ripper',
				subtitle: `Jack the Ripper Walking Tour: Uncover the Mystery of London's Most Notorious Killer`,
			},
			{
				name: '',
				subtitle: 'Up coming',
			},
		]);
	}, []);

	return (
		<header className={styles.header}>
			<nav>
				<NavLink
					className={styles.header__logo}
					to="/"
				>
					<SvgIcon
						color={color}
						name="logo"
					/>
				</NavLink>
				<Burger color={color} />

				<section
					className={styles.menu}
					id="menu"
				>
					<div className={styles.eye}></div>
					<ul className={styles.menu__list}>
						<li>
							<h2 className={styles.menu__title}>walks</h2>
							<ul>
								{walks.map((item) => (
									<li
										key={item.name}
										className={!item.name ? styles.menu__disabled : ''}
									>
										<Link
											to={`/walks/${item.name}`}
											className={styles.menu__item}
										>
											<SvgIcon name="key" />
											<div>
												{item.name ? <h3>{item.name}</h3> : ''}
												<span>{item.subtitle}</span>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</li>
						<li>
							<div>
								<Link className={styles.menu__item}>
									<SvgIcon name="question" />
									<h3>FAQ</h3>
								</Link>
							</div>
							<div>
								<Link className={styles.menu__item}>
									<SvgIcon name="info" />
									<h3>About Us</h3>
								</Link>
							</div>
							<div>
								<Link className={styles.menu__item}>
									<SvgIcon name="info" />
									<h3>Send Feedback</h3>
								</Link>
							</div>
						</li>
						<li>
							<div>
								<Link>
									<h3>Privacy notice</h3>
								</Link>
							</div>
							<div>
								<Link>
									<h3>Cancelation Policy</h3>
								</Link>
							</div>
						</li>
						<li className="fz-m">Copyright © 2023 Key London Walks</li>
					</ul>
				</section>
			</nav>
		</header>
	);
}

export default Header;
