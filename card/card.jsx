import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="card-container">
            <img src={require('./img.png')} alt="Avatar" style={{width:'100%'}}/>
            <div className="info-container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
        </div>)
    }
}

Card.propTypes = {

}
export default Card