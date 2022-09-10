import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className='geral'>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
