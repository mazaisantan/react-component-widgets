import React from 'react'
import './screen4.scss'

class Screen4 extends React.Component {
    constructor(props){
        super(props);    
        this.animate='animate_init'//'animate_init' or 'animate_done'    
    }

    shouldComponentUpdate(){
        //视窗可视区域高度
        let visualHeight = window.innerHeight          //浏览器可视区域高度,标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        if(this.node != undefined){
            let shape = this.node.getBoundingClientRect()
            let {top,bottom} = shape
            this.offsetTop = top
            this.offsetBottom = bottom
            let middle = (top + bottom)/2
            if(this.animate == 'animate_init' && 0 < middle && middle< visualHeight){
                //该屏进入视线,动画开始
                this.animate = 'animate_done'
                console.log('0.4*visualHeight :'+(0.4*visualHeight) +";middle:"+middle+';0.6*visualHeight:'+(0.6*visualHeight))
            }else if(this.animate == 'animate_done' && (top > visualHeight || bottom < 0)){
                //该屏退出视线,动画结束
                this.animate = 'animate_init'
            }else{
                //其他情况，不进行更新
                return false
            }
        }
        return true
    }

    render() {
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

export default Screen4