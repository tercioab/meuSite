import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from "./pages/sobre";
import Home from "./pages/home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/sobre' component={Sobre} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
