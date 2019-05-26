import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './layout/home/home';
import About from './layout/about/about';
import App_Components from './layout/components_layout/app_components';

ReactDOM.render((
	<BrowserRouter>
		<App />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/components" component={App_Components} />
			</Switch>
	</BrowserRouter>
), document.getElementById('root'));


serviceWorker.unregister();
