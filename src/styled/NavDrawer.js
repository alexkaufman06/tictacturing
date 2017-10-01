import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

// ABOVE WE ARE IMPORTING REACT AS WELL AS A FLOATING ACTION BUTTON
// FROM MATERIAL UI. THE FAB IS A CIRCULAR SVG WITH A HAMBURGER
// IN THE CENTER.

const StayVisible = styled.div`
	position: absolue;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`

// THE FUNCTION BELOW IS USED IN THE COMPONENTS
// NAVDRAWER.JS FILE. 
export const NavToggleButton = (props) => {
	return (
		<StayVisible
			{...props}
		>
			<FloatingActionButton
				onTouchTap={props.toggle}
			>
				<Menu/>
			</FloatingActionButton>
		</StayVisible>
	)
}