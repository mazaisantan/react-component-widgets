import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './screen2.scss';

class Screen2 extends React.Component {
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
        <section className={"screen-2 screen-2_"+this.animate} ref = {(node)=>{this.node = node}}>
            <div className={"screen-2__wrap screen-2__wrap_"+this.animate}>
                <div className={"screen-2__heading screen-2__heading_"+this.animate}>优美的设计，更令人着迷</div>
                <div className={"screen-2__subheading screen-2__subheading_"+this.animate}>采用受欢迎的设计，让它更加出色。<br/>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</div>
                <div className={"screen-2__phone screen-2__phone_"+this.animate}>
                    <div className={"screen-2__point screen-2__point_"+this.animate+ " screen-2__point_i_1 screen-2__point_i_1_"+this.animate}>高清摄像</div>
                    <div className={"screen-2__point screen-2__point_"+this.animate+ " screen-2__point_i_2 screen-2__point_i_2_"+this.animate}>超薄机身</div>
                    <div className={"screen-2__point screen-2__point_"+this.animate+ " screen-2__point_i_3 screen-2__point_i_3_"+this.animate}>大屏显示</div>
                </div>
            </div>
        </section>
        )
    }
}

Screen2.propTypes = {

}
export default Screen2