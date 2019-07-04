import React from 'react'
import './waitCircle.scss'
import './style.css'

class WaitCircle extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="wait-circle">
            <div className="circle1"></div>
            <div className="icon-spinner2"></div>
            <div className="icon-spinner3"></div>
        </div>)
    }
}

export default WaitCircle