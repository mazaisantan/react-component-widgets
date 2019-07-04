import React from 'react'
import './billboard.scss'
import Siber from './siber/siber.jsx'
import ContenRoute from './contentRoute/contentRoute.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Billboard extends React.Component {
    constructor(props){
        super(props)
        this.siberData = {}
        let {components} = this.props
        Object.keys(components).map((item)=>{
            this.siberData[item] = null;
        })
    }

    render() {
        let {siberData} = this
        let {components} = this.props
        return (
            <Router>
                <div className='billboard-container' style={{overflow:'hidden'}}>
                    <Siber data = {siberData} style={{float:'left',width:'200px'}}/>
                    <ContenRoute components = {components}/>
                </div>
            </Router>
        )
    }
}

export default Billboard