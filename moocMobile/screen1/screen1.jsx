import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './screen1.scss';

class Screen1 extends React.Component {
    constructor(props){
        super(props);     
        this.animate='animate_init'//'animate_init' or 'animate_done'
    }

    componentDidMount(){
        this.offsetTop = this.node.getBoundingClientRect().top
        let curElementStyle = this.node.currentStyle || document.defaultView.getComputedStyle(this.node)//如果原先是通过外部或内部样式表定义css样式，必须使用o.currentStyle[xxx] || document.defaultView.getComputedStyle(0)[xxx]来获取样式值
        this.clientHeight = parseInt(curElementStyle.height) + parseInt(curElementStyle.paddingTop)//获取元素的尺寸
        this.offsetBottom = this.offsetTop+this.clientHeight

    }

    render() {
        if(this.offsetTop!=undefined && (0.6*this.offsetTop <= this.props.scrollTop) && this.props.scrollTop < (this.offsetBottom-0.4*this.clientHeight)){
            this.animate = 'animate_done'
            
        }else if(this.offsetTop!=undefined && ((this.props.scrollTop >= (this.offsetBottom-0.4*this.clientHeight)) || (this.props.scrollTop < 0.6*this.offsetTop))){
            this.animate = 'animate_init'
        }
        
        return (
        <section className={"screen-1 screen-1_"+this.animate} ref = {(node)=>{this.node = node}}>
            <div className={"screen-1__wrap screen-1__wrap_"+this.animate}>
              <div className={"screen-1__heading screen-1__heading_"+this.animate}><b>慕课手机</b> 让你的生活更精彩</div>
            </div>
            <div className={"screen-1__phone screen-1__phone_"+this.animate}></div>
            <div className={"screen-1__shadow screen-1__shadow_"+this.animate}></div>
        </section>)
    }
}

Screen1.propTypes = {

}
export default Screen1