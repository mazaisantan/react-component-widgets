import React from 'react'
import './simpleSpin.scss'

class SimpleSpin extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simpleSpin">
            <div className="avatar">
                <img src={require("./lea.jpg")} />
            </div>
        </div>)
    }
}

export default SimpleSpin