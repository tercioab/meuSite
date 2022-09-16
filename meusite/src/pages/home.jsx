import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

import Bio from "../components/bio";
import Footer from "../components/footer";




class Home extends React.Component {
	render() {
		return (
			<>
				<Header />
				<Nav />
				<Bio />
				<Footer />
			</>
		);
	}
}

export default Home;
