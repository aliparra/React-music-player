import { ReactElement } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { SongsProvider } from './context/SongsContext';

function App(): ReactElement {
	const navBarLinks = [
		{ url: '/', label: 'Home' },
		{ url: 'about', label: 'About' },
	];

	return (
		<SongsProvider>
			<Navbar links={navBarLinks} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Routes>
		</SongsProvider>
	);
}

export default App;
