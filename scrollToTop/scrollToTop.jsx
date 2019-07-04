import React from 'react'
import './scrollToTop.scss'

class ScrollToTop extends React.Component {
    constructor(props){
        super(props);      
    }
    componentDidMount(){
        
    }
    clickToTop(){
        document.documentElement.scrollTop = 0; //兼容ie低版本的标准模式
        window.pageYOffset = 0;                 //IE9+及标准浏览器
        document.body.scrollTop = 0;            //兼容混杂模式；
    }
    render() {
        return (
        <div className="scrollToTop paper--5" onClick={this.clickToTop} ref={(node)=>{this.node=node}}>
            <div className="icon">></div>
        </div>)
    }
}

export default ScrollToTop