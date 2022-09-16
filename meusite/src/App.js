import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sobre from "./pages/sobre";
import Home from "./pages/home";
import Projetos from "./pages/projetos";

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/sobre' component={Sobre}  />
					<Route exact path='/projetos' component={Projetos} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
