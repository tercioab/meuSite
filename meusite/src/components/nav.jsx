import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<Link>PROJETOS</Link>
				<Link>HOME</Link>
				<Link>SOBRE MIM</Link>
			</nav>
		);
	}
}

export default Nav;
