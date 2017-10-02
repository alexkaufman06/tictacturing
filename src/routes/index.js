import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/Profile'

const createRoutes = () => {
	return (
		// BELOW IS A ROOT ROUTE WITH CHILD ROUTES NESTED INSIDE 
		// COMPONENTS LIVE IN SRC/CONTAINERS FOLDER
		<Route
			path='/'
			component={Template}
		>
    	<IndexRoute
    		component={TicTacToe}
    	/>
    	<Route
    		path={'/profile'}
    		component={Profile}
    	/>
		</Route>
	)
}

const Routes = createRoutes()

export default Routes