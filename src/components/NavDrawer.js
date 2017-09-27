import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer' 
// ^wrapped in brackets becuase it is one of several 
//  components being exported^

class NavDrawer extends Component {
	state = {
		open: true
	}

	toggle = () => {
		this.setState((prevState, props) => {
			return {
				open: !prevState.open,
				width: 250
			}
		})
	}

	render() {
		return (
			<div>
				<NavToggleButton
					toggle={this.toggle}
					width={this.state.width}
				/>
				<Drawer
					open={this.state.open}
					width={this.state.width}
				>
					<div
						style={{
							height: '200px',
							width: '100%',
							backgroundColor: 'salmon'
						}}
					>
						LoginContainer
					</div>
					<Divider/>
					<Link
						to={'/'}
					>	
						<MenuItem
							onTouchTap={this.toggle}
							primaryText={'Play'}
						/>
					</Link>
					<Link
						to={'/profile'}
					>
						<MenuItem
							onTouchTap={this.toggle}
							primaryText={'Profile'}
						/>
					</Link>
				</Drawer>
			</div>
		)
	}
}

export default NavDrawer