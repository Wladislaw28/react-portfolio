import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './layout/home/Home';
import About from './layout/home/About';

ReactDOM.render((
	<BrowserRouter>
		<App />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
	</BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();
