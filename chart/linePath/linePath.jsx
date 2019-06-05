import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './linePath.scss';

class LinePath extends React.Component {
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
    }

    dataToPosition(){
        let length = this.axis.length;
        let scale = this.axis.scale; 
        this.axis.data.map((item,index)=>{
            this.state.position[index].x = (item.x - scale.horizontal[0])*(length.horizontal)/(scale.horizontal[1]-scale.horizontal[0]);
            this.state.position[index].y = (item.y - scale.vertical[0])*(length.vertical)/(scale.vertical[1]-scale.vertical[0]);
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
                    return React.createElement('g',{className:'position',transform:'translate('+item.x+','+(this.axis.length.vertical-item.y)+')'},circle)
                })
            } 
                <path className='line' stroke='red' fill='none' d={this.getLinePathStr()}></path>   
            </g>
        </svg>
        )
    }
}

LinePath.propTypes = {

}
export default LinePath