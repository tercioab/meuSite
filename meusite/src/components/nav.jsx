import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link to="/projetos">PROJETOS</ Link>
				<Link to="/" >HOME</Link>
				<Link to="/sobre" >SOBRE MIM</Link>
			</nav>
		);
	}
}

export default Nav;
