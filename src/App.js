import React from 'react';
import Main from './layout/main/main';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';

const App = ({children}) => [
	<Header key="header" />,
	<Main key="main">
		{children}
	</Main>,

];

export default App;
