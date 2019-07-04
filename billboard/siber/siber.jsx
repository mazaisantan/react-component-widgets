import React from 'react';
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
            return Object.keys(data).map((item)=>{
                return (
                    <Item title={getItemTitle(item)} key={''+item}>
                        {this.getSiberDom(data[item])}
                    </Item>
                )
            })
        }

        function getItemTitle(item){
            return <Link to={'/'+item}>{<span>{item}</span>}</Link>
        }
    }

    
    render() {
        let {style} = this.props
        let {data} = this.state
        return (
            <div className='siber-container' style={style}> 
                {this.getSiberDom.call(this,data)} 
            </div>
        )
    }
}

export default Siber