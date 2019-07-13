import React from 'react'

class SvgG extends React.Component {
    constructor(props){
        super(props)
        let {pos} = this.props
        this.state = {
            pos:{
                x:0,
                y:200,
                ...pos
            }
        }
    }

    render() {
        let {children} = this.props
        let {pos} = this.state
        return(
            <g transform = {'translate('+pos.x+','+pos.y+')'}>
                {children}
            </g>
        )
    }
}

export default SvgG