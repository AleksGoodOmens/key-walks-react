import AppRoutes from '../../Routes/AppRoutes';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import './App.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
