import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './hoverTransition.scss';

class HoverTransition extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="hover-transition-container paper--5">
            <div className="material-icons transition-icon-begin">
                add
            </div>
            <div className="material-icons transition-icon-end">
                edit
            </div>
        </div>)
    }
}

HoverTransition.propTypes = {

}
export default HoverTransition