import { useEffect } from 'react';

import styles from './tickets.module.scss';
import './ticketss.scss';
import { Link } from 'react-router-dom';

function Tickets({ setColor }) {
	useEffect(() => {
		setColor('dark');
	}, [setColor]);

	return (
		<div className={`${styles.tickets} tickets`}>
			Tickets
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

export default Tickets;
