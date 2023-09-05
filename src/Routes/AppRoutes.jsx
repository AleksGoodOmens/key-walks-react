import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Walks from '../Components/Walks/Walks';
import Tickets from '../Components/Tickets/Tickets';

function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/walks"
				element={<Walks />}
			/>
			<Route
				path="/tickets"
				element={<Tickets />}
			/>
			<Route
				path="*"
				element={<div>page not found</div>}
			/>
		</Routes>
	);
}

export default AppRoutes;
