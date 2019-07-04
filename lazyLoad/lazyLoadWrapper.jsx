import React from 'react'
import './lazyLoadWrapper.scss'
import LazyLoad from './lazyLoad.jsx'

class LazyLoadWrapper extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            scrollTop:0
        }
    }

    setScrollTop(){
        this.setState({scrollTop:this.node.scrollTop})
    }

    render() {
        let lazyLoadWrapper = []
        for(let i=0;i<20;i++){
            lazyLoadWrapper.push(<LazyLoad scrollTop={this.state.scrollTop} index={i}/>)
        }
        return(
            <div className='lazy-load-wrapper' onScroll={this.setScrollTop.bind(this)} ref={(node)=>{this.node=node}}>
            {
                lazyLoadWrapper
            }
            </div>
        )
    }
}

export default LazyLoadWrapper