import { useEffect, useState } from 'react';

import styles from './walks.module.scss';

import pic1 from './imgs/1.jpg';
import pic2 from './imgs/2.jpg';
import pic3 from './imgs/3.jpg';

function Walks({ setColor }) {
	const [cards, setCards] = useState([{ title: 'title', pic: 'not found' }]);

	useEffect(() => {
		setColor('dark');
		setCards([
			{
				title: 'islington',
				pic: pic1,
			},
			{
				title: "king's Cross",
				pic: pic2,
			},
			{
				title: 'Through the ages',
				pic: pic3,
			},
		]);
	}, [setColor]);

	return (
		<section className={styles.walks}>
			{cards.map((card) => (
				<div
					className={styles.card}
					key={card.title}
					style={{ background: `center / cover no-repeat url(${card.pic})` }}
				>
					<h2 className={styles.card__title}>{card.title}</h2>
				</div>
			))}
		</section>
	);
}

export default Walks;
