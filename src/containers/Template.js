import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import PropTypes from 'prop-types'
import NavDrawer from '../components/NavDrawer.js'
import {Header, Main} from '../styled/Template'
import Relay from 'react-relay/classic'

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

export default Relay.createContainer(
	Template, {
		fragments: {
			viewer: () => Relay.QL`
				fragment on Viewer {
					user {
						id
					}
				}
			`,
		}
	}
)