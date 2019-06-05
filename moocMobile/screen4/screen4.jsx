import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './screen4.scss';

class Screen4 extends React.Component {
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
        <section className={"screen-4 screen-4_"+this.animate} ref={(node)=>{this.node = node}}>
            <div className={"screen-4__wrap screen-4__wrap_"+this.animate}>
                <div className={"screen-4__heading screen-4__heading_"+this.animate}>丰富的手机型号</div>
                <div className={"screen-4__subheading screen-4__subheading_"+this.animate}>找到适合你的手机</div>
                <div className={"screen-4__type screen-4__type_"+this.animate}>

                    <div className={"screen-4__type-item screen-4__type-item_"+this.animate+ " screen-4__type-item_i_1 screen-4__type-item_i_1"+this.animate}>
                    <div className={"screen-4__type-item-name screen-4__type-item-name_"+this.animate}>慕课红</div>
                    <div className={"screen-4__type-item-storage screen-4__type-item-storage_"+this.animate}>16G/32G/64G</div>
                    </div>

                    <div className={"screen-4__type-item screen-4__type-item_"+this.animate+ " screen-4__type-item_i_2 screen-4__type-item_i_2_"+this.animate}>
                    <div className={"screen-4__type-item-name screen-4__type-item-name_"+this.animate}>土豪金</div>
                    <div className={"screen-4__type-item-storage screen-4__type-item-storage_"+this.animate}>16G/32G/64G</div>
                    </div>
                    <div className={"screen-4__type-item screen-4__type-item_"+this.animate+ " screen-4__type-item_i_3 screen-4__type-item_i_3_"+this.animate}>
                    <div className={"screen-4__type-item-name screen-4__type-item-name_"+this.animate}>太空灰</div>
                    <div className={"screen-4__type-item-storage screen-4__type-item-storage_"+this.animate}>16G/32G/64G</div>
                    </div>

                    <div className={"screen-4__type-item screen-4__type-item_"+this.animate+ " screen-4__type-item_i_4 screen-4__type-item_i_4_"+this.animate}>
                    <div className={"screen-4__type-item-name screen-4__type-item-name_"+this.animate}>绅士黑</div>
                    <div className={"screen-4__type-item-storage screen-4__type-item-storage_"+this.animate}>16G/32G/64G</div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

Screen4.propTypes = {

}
export default Screen4