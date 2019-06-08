import React from 'react';
import Main_Comps from "../components_layout/main_components/main_comps";
import Navigation_Comps from "../components_layout/navigation_components/navigation_comps";
import Main_Router_Comps from './main_router_comps';
import Footer from "../footer/footer";

const App_Components = ({children}) => [
	<Navigation_Comps key="navigation" />,
	<Main_Comps key="main_comps">
		{children}
	</Main_Comps>,
	<Main_Router_Comps key="main_rout_comps"/>
];

export default App_Components;
