import React from 'react'
import SvgCircle from './svgShape/circle/circle.js'
import SvgText from './svgShape/text/text.js'
import SvgRect from './svgShape/rect/rect.js'
import SvgLine from './svgShape/line/line.js'
import SvgSector from './svgShape/sector/sector.js'

class SvgShapes extends React.Component {
	constructor(props){
			super(props)   
	}

	render() {
			return (
			<svg className='svg-shape-container' width='1000px' height='1000px'>
					<SvgCircle />
					<SvgText />
					<SvgRect />
					<SvgLine />
					<SvgSector />
			</svg>)
	}
}

export default SvgShapes