import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import './App.css';

const App = ({children}) => [
	<Header key="header" />,
	<Main key="main">
		{children}
	</Main>,
	<Footer key="footer" />
];

export default App;
