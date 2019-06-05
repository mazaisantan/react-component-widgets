import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './navNumber.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Star from '../star/star.jsx'
import ProfileCard from '../profileCard/profileCard.jsx'

class NavNumber extends React.Component {
    constructor(props){
        super(props);      
        this.state={
            curIndex:1,
        }
    }

    setCurIndex(index){
        this.setState({curIndex:index});
    }

    curIndexInc(){
        this.setState({
            curIndex:this.state.curIndex + 1,
        });
    }

    curIndexDec(){
        this.setState({
            curIndex:this.state.curIndex - 1,
        });          
    }



    render() {
        return (
        <Router>
            <div className="nav-number">
                <ul>
                    <span className={this.state.curIndex==1?'disable':null} onClick={this.state.curIndex==1?null:this.curIndexDec.bind(this)}>
                        <Link to={'/NavNumber/'+(this.state.curIndex>1?(this.state.curIndex-1):this.state.curIndex)+''}>&lt;</Link>
                    </span>
                    <li className={this.state.curIndex==1?'selected':null} onClick={this.setCurIndex.bind(this,1)}>
                        <Link to="/NavNumber/1">1</Link>
                    </li>
                    <li className={this.state.curIndex==2?'selected':null} onClick={this.setCurIndex.bind(this,2)}>
                        <Link to="/NavNumber/2">2</Link>
                    </li>
                    <li className={this.state.curIndex==3?'selected':null} onClick={this.setCurIndex.bind(this,3)}>
                        <Link to="/NavNumber/3">3</Link>
                    </li>
                    <li className={this.state.curIndex==4?'selected':null} onClick={this.setCurIndex.bind(this,4)}>
                        <Link to="/NavNumber/4">4</Link>
                    </li>
                    <li className={this.state.curIndex==5?'selected':null} onClick={this.setCurIndex.bind(this,5)}>
                        <Link to="/NavNumber/5">5</Link>
                    </li>
                    <span className={this.state.curIndex==5?'disable':null} onClick={this.state.curIndex==5?null:this.curIndexInc.bind(this)}>
                        <Link to={'/NavNumber/'+(this.state.curIndex<5?(this.state.curIndex+1):this.state.curIndex)+''}>&gt;</Link>
                    </span>
                </ul> 
                <Route exact path="/NavNumber" component={Star} />
                <Route path="/NavNumber/1" component={Star} />
                <Route path="/NavNumber/2" component={ProfileCard} />
            </div>
        </Router>)
    }
}

NavNumber.propTypes = {

}
export default NavNumber