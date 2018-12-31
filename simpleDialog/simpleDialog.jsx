import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './simpleDialog.scss';

class SimpleDialog extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-Dialog">
            <div className="dialog"></div>
        </div>)
    }
}

SimpleDialog.propTypes = {

}
export default SimpleDialog