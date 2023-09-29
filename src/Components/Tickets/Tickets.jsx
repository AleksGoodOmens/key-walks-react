import { useEffect } from 'react';

function Tickets({ setColor }) {
	useEffect(() => {
		setColor('');
	}, [setColor]);

	return <div>Tickets</div>;
}

export default Tickets;
