import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './inputField.scss';

class InputField extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputState:null
        }      
    }

    enableInputFieldState(){
        this.setState({
            inputState:'active'
        })
    }

    disableInputFieldState(){
        this.setState({
            inputState:null
        })
    }
    render() {
        return (
        <div className={"input-field-container " + this.state.inputState}>
            <label for='input-field'>title for input field</label>
            <input className='input-field' onFocus={this.enableInputFieldState.bind(this)} onBlur={this.disableInputFieldState.bind(this)}></input>
            <hr/>
        </div>)
    }

}

InputField.propTypes = {

}
export default InputField