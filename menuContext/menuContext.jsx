import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './menuContext.scss';

class MenuContext extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <ul className="contextMenu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
        </ul>
        )
    }
}

MenuContext.propTypes = {

}
export default MenuContext