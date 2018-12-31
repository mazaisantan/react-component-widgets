import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './simpleSpin.scss';

class SimpleSpin extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simpleSpin">
            <div className="avatar">
                <img src={require("./lea.jpg")} />
            </div>
        </div>)
    }
}

SimpleSpin.propTypes = {

}
export default SimpleSpin