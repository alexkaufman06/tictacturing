import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import PropTypes from 'prop-types'
import NavDrawer from '../components/NavDrawer.js'
import {Header, Main} from '../styled/Template'

injectTapEventPlugin()

class Template extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavDrawer/>
					<Header>
						TicTacTuring
					</Header>
					<Main>
						{this.props.children}
					</Main>
				</div>
			</MuiThemeProvider>
		)
	}
}

Template.propTypes = {
	children: PropTypes.element.isRequired
}

export default Template