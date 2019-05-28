import React from 'react';
import { NavLink} from 'react-router-dom';
import './navigation_comps.css';


const Navigation_Comps = () => (
	<div className="navigation_comps">
		<nav>
			<ul className="nav_comps">
				<li><NavLink to="/components/home_components">Home Comp</NavLink></li>
				<li><NavLink to="/components/button">Button</NavLink></li>
				<li><NavLink to="/components/button-group">Button Group</NavLink></li>
				<li><NavLink to="/components/icon">Icon</NavLink></li>
				<li><NavLink to="/components/image">Image</NavLink></li>
				<li><NavLink to="/components/chip">Chip</NavLink></li>
				<li><NavLink to="/components/badge">Badge</NavLink></li>
			</ul>
		</nav>
	</div>
);

export default Navigation_Comps;
