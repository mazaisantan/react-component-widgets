import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './screen5.scss';

class Screen5 extends React.Component {
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
        <section className={"screen-5 screen-5_"+this.animate} ref={(node)=>{this.node = node}}>
            <div className={"screen-5__wrap screen-5__wrap_"+this.aniamte}>
              <div className={"screen-5__heading screen-5__heading_"+this.animate}>游戏、学习、拍照、有这一部就够了</div>
              <div className={"screen-5__subheading screen-5__subheading_"+this.animate}>看视频、拍摄高清视频与照片、视频聊天、一机多功能，让您生活更丰富精彩。</div>


            </div>
            <div className={"screen-5__back screen-5__back_"+this.animate}></div>
        </section>
        )
    }
}

Screen5.propTypes = {

}
export default Screen5