import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './singleTicket.module.scss';
function SingleTicket({ setColor }) {
	const { name } = useParams();

	useEffect(() => {
		setColor('dark');
	});
	console.log(name);
	return (
		<div className={`${styles.ticket} fadeIn`}>
			{name}
			<div>this page in a work progress</div>
			<Link
				className="button"
				to={'/'}
			>
				go back
			</Link>
		</div>
	);
}

export default SingleTicket;
