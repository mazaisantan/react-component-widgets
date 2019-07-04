import React from 'react'
import './screen1.scss'

class Screen1 extends React.Component {

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
            <section className={"screen-1 screen-1_"+this.animate} ref = {(node)=>{this.node = node}}>
                <div className={"screen-1__wrap screen-1__wrap_"+this.animate}>
                <div className={"screen-1__heading screen-1__heading_"+this.animate}><b>小米手机</b> 让你的生活更精彩</div>
                </div>
                <div className={"screen-1__phone screen-1__phone_"+this.animate}></div>
                <div className={"screen-1__shadow screen-1__shadow_"+this.animate}></div>
            </section>)
    }
}

export default Screen1