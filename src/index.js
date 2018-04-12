import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Scavenger from './pages/scavenger.js';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch> 
					<Route exact path='/' component={Scavenger}/>
                    <Route path='/scavenger' component={Scavenger}/>
                </Switch>
			</BrowserRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

// Hot-loading
registerServiceWorker();