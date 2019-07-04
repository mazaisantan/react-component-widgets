import React from 'react'
import './simpleDialog.scss'

class SimpleDialog extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-Dialog">
            <div className="dialog"></div>
        </div>)
    }
}

export default SimpleDialog