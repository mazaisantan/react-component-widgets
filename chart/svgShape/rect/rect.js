import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class SvgRect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shape:{
                width:0,
                height:0
            },
            offset:{
                xRadio:0,
                yRadio:0
            },
            pos:{
                x:0,
                y:0
            },
            margin:{
                left:0,
                right:0,
                bottom:0,
                top:0
            }
        }
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        let x = 0,y = 0;
        x = pos.x - (offset.xRadio)*(shape.width) + margin.left - margin.right
        y = pos.y - offset.yRadio*shape.height + margin.top - margin.bottom
        return {x,y}
    }

    render() {
        let pos = this.getActualPos()
        return(
            <rect {...this.state.shape} {...pos} {...this.props}/>
        )
    }
}

SvgRect.PropTypes = {

}

export default SvgRect