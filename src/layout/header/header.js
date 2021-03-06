import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="container-fluid">
					<div className="row no-gutters menu">
						<div className="col-md-6 col-lg-3 logo_header">
							<a className="logo"><NavLink exact to="/">WL28</NavLink></a>
						</div>
						<div className="col-md-6 col-lg-9 d-none d-lg-block d-xl-block">
							<nav className="d-flex flex-row-reverse">
								<ul className="p-2 nav_header">
									<li><NavLink exact to="/">Home</NavLink></li>
									<li><NavLink to="/about">About</NavLink></li>
									<li><NavLink to="/components">Components</NavLink></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
