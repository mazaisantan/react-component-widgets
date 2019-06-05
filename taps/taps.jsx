import React from 'react';
import ReactDOM from 'react-dom';
import './taps.scss'
import PropTypes from 'prop-types';

class Taps extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div className="taps-container">
            <div className="navs">
                <a href="#home"  className="selected">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="contents">
                <div style={{paddingLeft:"16px"}}>
                    <h2>Border Links</h2>
                    <p>Hover over the links.</p>
                </div>
                <div style={{paddingLeft:"16px"}}  className="selected">
                    <h2>News Links</h2>
                    <p>Hover over the links.</p>
                </div>
            </div>
        </div>
        )
    }
}

Taps.propTypes = {
    
}
export default Taps