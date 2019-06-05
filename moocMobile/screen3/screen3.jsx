import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './screen3.scss';

class Screen3 extends React.Component {
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
        <section className="screen-3" ref = {(node)=>{this.node = node}}>
            <div className="screen-3__wrap">
                <div className={"screen-3__heading screen-3__heading_"+this.animate}>外形小巧，功能强大的手机</div>
                <div className={"screen-3__subheading screen-3__subheading_"+this.animate}>采用受欢迎的设计，让它更加出色。
                <br/>款式小巧、轻便手感更舒适。绚丽高清的显示屏，整个外观显得格外精致。</div>
                <div className={"screen-3__phone screen-3__phone_"+this.animate}></div>
                <div className={"screen-3__features screen-3__features_"+this.animate}>
                    <div className={"screen-3__features-item"}>
                    <span className={"screen-3__features-item-number screen-3__features-item_i_1"}>
                        5.7
                    </span>
                    英寸大屏
                    </div>
                    <div className={"screen-3__features-item"}>
                    <span className={"screen-3__features-item-number screen-3__features-item_i_2"}>
                        1200
                    </span>
                    万像素
                    </div>
                    <div className={"screen-3__features-item"}>
                    <span className={"screen-3__features-item-number screen-3__features-item_i_3"}>
                        3D
                    </span>
                    touch
                    </div>
                    <div className={"screen-3__features-item"}>
                    <span className={"screen-3__features-item-number screen-3__features-item_i_4"}>
                        A9
                    </span>
                    处理器
                    </div>
                </div>
                </div>
        </section>
        )
    }
}

Screen3.propTypes = {

}
export default Screen3