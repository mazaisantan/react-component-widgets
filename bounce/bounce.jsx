import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './bounce.scss';

class Bounce extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="bounce-container">
            <div className="ball">
            </div>
        </div>)
    }
}

Bounce.propTypes = {

}
export default Bounce