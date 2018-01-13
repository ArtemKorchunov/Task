import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Menu from './containers/Menu'
import Users from './containers/Users'
import Calc from './containers/Calc'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
			
				<Route component={Menu}>
					<Route path="/" component={Users}/>
					<Route path="/calc" component={Calc}/>
				</Route>
			</Router>
		</Provider>,
	document.getElementById('root')	
)


