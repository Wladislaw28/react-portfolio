import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="logo_header">
					<h1>Logo</h1>
				</div>
				<nav>
					<ul className="nav">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink exact to="/about">About</NavLink></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Header;
