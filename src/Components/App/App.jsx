import { useState } from 'react';
import AppRoutes from '../../Routes/AppRoutes';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import './App.scss';

function App() {
	const [color, setColor] = useState('');

	return (
		<div className="app">
			<Header color={color} />
			<main>
				<AppRoutes setColor={setColor} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
