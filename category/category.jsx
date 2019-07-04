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
        this.textIndent = 0
    }

    getCategoryDom(data,textIndent){
        if(data == null){
            return null; 
        }else{
            return Object.keys(data).map((item)=>{
                return <Item title = {getItemTitle(item)} style={{textIndent:textIndent+'px'}} key={item}>{this.getCategoryDom(data[item],textIndent+20)}</Item>
            })
        }

        function getItemTitle(item){
            return <span>{item}</span>
        }
    }

    
    render() {
        let {getCategoryDom} = this
        let {data} = this.state
        let textIndent = 0
        return (
            <div className='category-container'> 
                {getCategoryDom.call(this,data,textIndent)} 
            </div>
        )
    }
}

export default Category