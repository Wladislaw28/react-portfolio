import React from 'react';
import PropTypes from 'prop-types';

const Main_Comps = ({children}) => (
	<div className="main_comps">
		{children}
	</div>

);

Main_Comps.propTypes = {
	children: PropTypes.node.isRequired
};

export default Main_Comps;
