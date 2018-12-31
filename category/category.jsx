import React from 'react';
import ReactDOM from 'react-dom';
import './category.scss'
import Item from './item/item.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends React.Component {
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

    getCategoryDom(data){
        if(data == null){
            return null; 
        }else{
            return Object.keys(data).map((item,index)=>{
                return <Item title = {getItemTitle(item)}>{this.getCategoryDom(data[item])}</Item>
            })
        }

        function getItemTitle(item){
            return <span>{item}</span>
        }
    }

    
    render() {
        return (
            <div className='cagegory-container' style={this.props.style}> 
                {this.getCategoryDom.call(this,this.state.data)} 
            </div>
        )
    }
}

export default Category