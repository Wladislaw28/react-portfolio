import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home_Comps from "./Home_Comps";


const Main_Router_Comps = () => (
	<div className="main_rout_comps">
		<Switch>
			<Route exact path="/components/home_components" component={Home_Comps}/>
		</Switch>
	</div>
);

export default Main_Router_Comps;
