import bg from './imgs/1.jpg';

import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home({ setColor }) {
	useEffect(() => {
		setColor('');
	}, []);

	const [content, setContent] = useState({
		title: "Discover the Enchanting Past of King's Cross.",
		paragraph: "Unveiling the Hidden Gems of London's Thriving Hub",
	});

	return (
		<section className={styles.home}>
			<section
				className={styles.promo}
				style={{
					background: `center / cover no-repeat url(${bg})`,
				}}
			>
				<h1 className={styles.promo__title}>
					key <br /> london <br /> walks
				</h1>
			</section>

			<section className={styles.body}>
				<h2 className={styles.body__title}>{content.title}</h2>
				<p className={styles.body__paragraph}>{content.paragraph}</p>
				<Link
					to={'/walks'}
					className="button"
				>
					Explore Tours
				</Link>
			</section>
		</section>
	);
}

export default Home;
