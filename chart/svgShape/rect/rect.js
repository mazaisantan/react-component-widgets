import React from 'react'

class SvgRect extends React.Component {
    constructor(props){
        super(props)
        let {shape,offset,pos} = this.props
        this.state = {
            shape:{
                width:100,
                height:20,
                ...shape
            },
            offset:{
                xRadio:0,
                yRadio:0.5,
                cx:0,
                cy:0,
                ...offset
            },
            pos:{
                x:0,
                y:200,
                ...pos
            }
        }
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        let x = 0,y = 0;
        x = pos.x - offset.xRadio*shape.width + offset.cx
        y = pos.y - offset.yRadio*shape.height + offset.cy
        return {x,y}
    }

    render() {
        let pos = this.getActualPos()
        let {shape} = this.state
        return(
            <rect {...shape} {...pos}/>
        )
    }
}

export default SvgRect