import React from 'react'
import './imageText.scss'

class ImageText extends React.Component {
    constructor(props){
        super(props)
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

export default ImageText