import React from 'react';
import ReactDOM from 'react-dom';
import './sideBar.scss'
import './sideBarWrapper.scss'
import Item from './item/item.jsx'
import './style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class SideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.dataObj.data || {
                'hello1':{
                    'hello2':{
                        'hello3':null
                    }
                },
                'hello11':null
            }
        }
        this.getItemTitle =  this.props.dataObj.getItemTitle
        this.getItemChildren = this.props.dataObj.getItemChildren
    }

    getSideBarDom(data){
        if(data == null){
            return null; 
        }else{
            let keys = Object.keys(data)
            return keys.map((key)=>{
                let value = data[key]
                let itemChildren = this.getItemChildren(value,key)
                let itemTitle = this.getItemTitle(value,key)
                return (
                    <Item title = {itemTitle}> 
                        {this.getSideBarDom(itemChildren)} 
                    </Item>
                )
            })
        }     
    }

    
    render() {
        return (
            <div className='sideBar-container' style={this.props.style}> 
                {this.getSideBarDom.call(this,this.state.data)} 
            </div>
        )
    }
}

let json = {
    item1:{
        title:'hello',
        children:[
            {title:'hello'},
            {title:'hello2'},
            {title:'hello3'}
        ]
    },
    item2:{
        title:'hello2'
    },
    item3:{
        title:'hello3'
    }
}

let dataObj = {
    data:json,
    getItemTitle:function(value,key){
        return value.title
    },
    getItemChildren:function(value,key){
        return value.children
    }
}

let SideBarWrapper = ()=>(
    <SideBar dataObj={dataObj}/>
)

export default SideBarWrapper