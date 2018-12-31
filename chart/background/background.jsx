import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './background.scss';

class Background extends React.Component {
    constructor(props){
        super(props);  
        this.state = {
            margin:[0,10]//left、top边距
        }    
    }

    render() {
        return (
        <g className='background-container' transform={'translate('+this.state.margin[0]+','+this.state.margin[1]+')'}>
            
        </g>)
    }
}

Background.propTypes = {

}
export default Background