import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './curveLinePath.scss';
import {line,monotoneX} from '../utils/curveLine.js'

class CurveLinePath extends React.Component {
    constructor(props){
        super(props);  
        const autoScale = true;

        this.axis = {
            length : {
                horizontal:100,
                vertical:100
            },
            scale : {
                horizontal:[0,100],
                vertical:[0,100]
            },
            data : [
                {x:0,y:100},
                {x:50,y:50},
                {x:100,y:30}
            ]
        }

        this.state = {
            position:[
                {x:0,y:100},
                {x:50,y:50},
                {x:100,y:30}
            ]
        }    
        this.dataToPosition();
        this.line = line()
            .curve(monotoneX)
            .x(function (d) { return d.x })
            .y(function (d) { return d.y });
        this.path = this.line(this.state.position)
    }

    dataToPosition(){
        let length = this.axis.length;
        let scale = this.axis.scale; 
        this.axis.data.map((item,index)=>{
            this.state.position[index].x = (item.x - scale.horizontal[0])*(length.horizontal)/(scale.horizontal[1]-scale.horizontal[0]);
            this.state.position[index].y = this.axis.length.vertical-(item.y - scale.vertical[0])*(length.vertical)/(scale.vertical[1]-scale.vertical[0]);
        })
    }

    getLinePathStr(){
        var linePathStr = '';
        this.state.position.map((item,index)=>{
            if(index == 0){
                linePathStr += 'M'+item.x+','+(this.axis.length.vertical-item.y)
            }else{
                linePathStr += 'L'+item.x+','+(this.axis.length.vertical-item.y)
            }
        })
        return linePathStr;
    }

    render() {
        return (
        <svg>
            <g className='linePath-container'>
            {
                this.state.position.map((item,index)=>{
                    let circle = React.createElement('circle',{fill:'orange',r:'2'});
                    return React.createElement('g',{className:'position',transform:'translate('+item.x+','+(item.y)+')'},circle)
                })
            } 
                <path className='line' stroke='red' fill='none' d={this.path}></path>   
            </g>
        </svg>
        )
    }
}

CurveLinePath.propTypes = {

}
export default CurveLinePath