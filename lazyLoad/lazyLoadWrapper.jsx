import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './lazyLoadWrapper.scss';
import LazyLoad from './lazyLoad.jsx'

class LazyLoadWrapper extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            scrollTop:0,
            parentOffsetTop:0
        }
    }

    setScrollTop(){
        this.setState({scrollTop:this.node.scrollTop})
    }

    componentDidMount(){
        this.setState({parentOffsetTop:this.node.getBoundingClientRect().top})
        
    }

    componentWillUnmount() {
  
    }


    render() {
        let lazyLoadWrapper = []
        for(let i=0;i<20;i++){
            lazyLoadWrapper.push(<LazyLoad scrollTop={this.state.scrollTop} parentOffsetTop={this.state.parentOffsetTop} index={i}/>)
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

LazyLoadWrapper.propTypes = {

 }


export default LazyLoadWrapper