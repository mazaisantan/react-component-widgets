import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './dropdown.scss';

class Dropdown extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="dropdown-container">
            <button className="dropdown-btn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        )
    }
}

Dropdown.propTypes = {

}
export default Dropdown