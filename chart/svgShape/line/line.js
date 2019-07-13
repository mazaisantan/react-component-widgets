import React from 'react'

class SvgLine extends React.Component {
    constructor(props){
        super(props)
        let {shape,offset,pos} = this.props
        this.state = {
            shape:{
                cx:100,
                cy:0,
                ...shape
            },
            offset:{
                xRadio:0.5,
                yRadio:0.5,
                cx:0,
                cy:0,
                ...offset
            },
            pos:{
                x:0,
                y:250,
                ...pos
            }
        }
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        let x1 = 0,y1 = 0;
        x1 = pos.x - offset.xRadio*(shape.width || shape.cx) + offset.cx
        y1 = pos.y - offset.yRadio*(shape.height || shape.cy) + offset.cy
        return {x1,y1}
    }

    render() {
        let {shape} = this.state
        let beginPos = this.getActualPos()
        let endPos = {
            x2: beginPos.x1 + shape.cx,
            y2: beginPos.y1 + shape.cy
        }
        
        return(
            <line {...beginPos} {...endPos} style={{stroke:'black',strokeWidth:'2'}}/>
        )
    }
}

export default SvgLine