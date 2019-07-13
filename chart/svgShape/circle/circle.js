import React from 'react'

class SvgCircle extends React.Component {

    constructor(props){
        super(props);
        let {shape,offset,pos} = this.props
        this.state = {
            shape:{
                r:50,
                ...shape
            },
            offset:{
                xRadio:0,
                yRadio:0,
                cx:0,
                cy:0,
                ...offset
            },
            pos:{
                x:0,
                y:0,
                ...pos
            }
        }
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        let cx = pos.x - offset.xRadio*2*shape.r + offset.cx + shape.r
        let cy = pos.y - offset.yRadio*2*shape.r  + offset.cy + shape.r
        return {cx,cy}
    }

    render() {
        let pos = this.getActualPos()
        return(
            <circle {...this.state.shape} {...pos}/>
        )
    }
}

export default SvgCircle