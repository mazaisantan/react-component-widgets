import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class SvgCircle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            shape:{
                r:2
            },
            offset:{
                xRadio:0,
                yRadio:0
            },
            pos:{
                cx:0,
                cy:0
            },
            margin:{
                left:0,
                right:0,
                top:0,
                bottom:0
            }
        }
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        x = pos.cx - offset.xRadio*shape.width+r/2 + margin.left - margin.right
        y = pos.cy - offset.yRadio*shape.height+r/2  + margin.top - margin.bottom
        return {x,y}
    }

    render() {
        let pos = this.getActualPos()
        return(
            <circle {...this.state.shape} {...pos} {...this.props}/>
        )
    }
}

SvgCircle.PropTypes = {

}

export default SvgCircle