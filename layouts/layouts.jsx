import React from 'react'
import './layouts.scss'

class Layouts extends React.Component {
    constructor(props){
        super(props);     
    }
    render() {
        return (
        <div className="layouts-container">
            <div className='layout-group1'>
                <div id='column1'></div>
                <div id='column2'></div>
                <div id='column3'></div>
            </div>
            <div className='layout-group2'>
                <div id='column1'></div>
                <div id='column2'></div>
                <div id='column3'></div>
            </div>
            <div className='layout-group3'>
                <div id='column1'></div>
                <div id='column2'></div>
                <div id='column3'></div>
            </div>
        </div>)
    }
}

export default Layouts