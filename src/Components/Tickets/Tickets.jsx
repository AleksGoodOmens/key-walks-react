import { useEffect } from 'react';

import styles from './tickets.module.scss';
import './ticketss.scss';

function Tickets({ setColor }) {
	useEffect(() => {
		setColor('');
	}, [setColor]);

	return <div className={`${styles.tickets} tickets`}>Tickets</div>;
}

export default Tickets;
