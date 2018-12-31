import React from 'react';
import ReactDOM from 'react-dom';
import './siber.scss'
import Item from './item/item.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Siber extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data || {
                'hello1':{
                    'hello2':{
                        'hello3':null
                    }
                },
                'hello11':null
            }
        }
    }

    getSiberDom(data){
        if(data == null){
            return null; 
        }else{
            return Object.keys(data).map((item,index)=>{
                return <Item title={getItemTitle(item)} key={''+item}>{this.getSiberDom(data[item])}</Item>
            })
        }

        function getItemTitle(item){
            return <Link to={'/'+item}>{<span>{item}</span>}</Link>
        }
    }

    
    render() {
        return (
            <div className='siber-container' style={this.props.style}> 
                {this.getSiberDom.call(this,this.state.data)} 
            </div>
        )
    }
}

export default Siber