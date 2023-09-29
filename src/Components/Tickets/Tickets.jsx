import { useEffect } from 'react';

function Tickets({ setColor }) {
	useEffect(() => {
		setColor('');
	}, []);

	return <div>Tickets</div>;
}

export default Tickets;
