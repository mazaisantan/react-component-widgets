import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './imageText.scss';

class ImageText extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="imageText-container">
            <img src={require('./notebook.jpg')} alt="Notebook" style={{width:"100%"}}/>
            <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum..</p>
            </div>
        </div>
        )
    }
}

ImageText.propTypes = {

}
export default ImageText