import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Walks from '../Components/Walks/Walks';
import Tickets from '../Components/Tickets/Tickets';

function AppRoutes({ setColor }) {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home setColor={setColor} />}
			/>
			<Route
				path="/walks"
				element={<Walks setColor={setColor} />}
			/>
			<Route
				path="/tickets"
				element={<Tickets setColor={setColor} />}
			/>
			<Route
				path="*"
				element={<div>page not found</div>}
			/>
		</Routes>
	);
}

export default AppRoutes;
