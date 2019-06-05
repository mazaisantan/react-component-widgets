import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './profileCard.scss';
import './style.css'

class ProfileCard extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="card-container">
            <img src={require('./img.jpg')} alt="John" style={{width:'100%'}}/>
            <h1>John Doe</h1>
            <p className="title">Architect & Engineer</p>
            <p>Harvard University</p>
            <a href="#"><i className="home"></i></a> 
            <a href="#"><i className="pencil"></i></a> 
            <a href="#"><i className="newspaper"></i></a> 
            <a href="#"><i className="image"></i></a> 
            <p><button>Contact</button></p>
        </div>)
    }
}

/*ProfileCard.propTypes = {

}*/
export default ProfileCard