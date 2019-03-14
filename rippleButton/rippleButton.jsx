import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './rippleButton.scss';

class RippleButton extends React.Component {
    constructor(props){
        super(props);  
        this.state={
            offset:{
                x:0,
                y:0
            },
            ripple:null
        }    
    }

    setRipplePosition(evt){
        this.setState({ripple:null})
        let offset = {
            x:evt.clientX-this.node.getBoundingClientRect().left,
            y:evt.clientY-this.node.getBoundingClientRect().top
        }
        this.setState({
            offset
        })
    }
    rippleEmit(){
        this.setState({ripple:'enable'})
    }

    render() {
        return (
        <div className="ripple-button-container" onMouseDown={this.setRipplePosition.bind(this)} onMouseUp={this.rippleEmit.bind(this)} ref={(node=>{this.node=node})}>
            <div className={'ripple '+ this.state.ripple} style={{left:this.state.offset.x,top:this.state.offset.y}}></div>
        </div>)
    }
}

RippleButton.propTypes = {

}
export default RippleButton