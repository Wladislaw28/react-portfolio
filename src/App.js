import React from 'react';
import Main from './layout/main/main';
import Header from './layout/header/header';
import Footer from "./layout/footer/footer";

const App = ({children}) => [

	<Header key="header" />,
	<Main key="main">
		{children}
	</Main>,
];

export default App;
