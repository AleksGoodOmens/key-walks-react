import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './singleWalk.module.scss';

function SingleWalk({ setColor }) {
	const { singleWalk } = useParams();

	useEffect(() => {
		setColor('dark');
	}, [setColor]);

	return (
		<section className={styles.container}>
			<h1>{singleWalk}</h1>
		</section>
	);
}

export default SingleWalk;
