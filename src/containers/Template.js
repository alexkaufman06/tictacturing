import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin()

class Template extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<header>
						<h1>TicTacTuring</h1>
						<RaisedButton
							label={'Test Button'}
							primary={true}
							onTouchTap={()=>{console.log('Hello, I work!')}}
						/>
					</header>
					<main>
						{this.props.children}
					</main>
				</div>
			</MuiThemeProvider>
		)
	}
}

Template.propTypes = {
	children: PropTypes.element.isRequired
}

export default Template