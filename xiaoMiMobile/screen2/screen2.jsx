import React from 'react'
import './screen2.scss'

class Screen2 extends React.Component {

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