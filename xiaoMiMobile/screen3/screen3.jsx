import React from 'react'
import './screen3.scss'

class Screen3 extends React.Component {
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

export default Screen3