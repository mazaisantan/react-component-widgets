import React from 'react';
import ReactDOM from 'react-dom';
import './billboard.scss'
import Siber from './siber/siber.jsx'
import ContenRoute from './contentRoute/contentRoute.jsx'
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';



class Billboard extends React.Component {
    constructor(props){
        super(props);
        this.siberData = {};
        Object.keys(this.props.components).map((item,index)=>{
            this.siberData[item] = null;
        })
    }

    render() {
        return (
            <Router>
                <div className='billboard-container' style={{overflow:'hidden'}}>
                    <Siber data = {this.siberData} style={{float:'left',width:'200px'}}/>
                    <ContenRoute components = {this.props.components}/>
                </div>
            </Router>
        )
    }
}

export default Billboard