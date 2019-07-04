import React from 'react'
import './xiaoMiMobile.scss'
import './animate.scss'
import Screen1 from './screen1/screen1.jsx'
import Screen2 from './screen2/screen2.jsx'
import Screen3 from './screen3/screen3.jsx'
import Screen4 from './screen4/screen4.jsx'
import Screen5 from './screen5/screen5.jsx'
import Buy from './buy/buy.jsx'
import Outline from './outline/outline.jsx'

class XiaoMiMobile extends React.Component {
    constructor(props){
        super(props);      
        this.state = {
            scrollTop:0,
            outlineActive:'outline_active_1'//1/2/3/4/5
        }

        this.childNodes = {
            screen1:undefined,
            screen2:undefined,
            screen3:undefined,
            screen4:undefined,
            screen5:undefined
        }
    }

    setScrollTop(){
        let scrollTop = this.node.scrollTop
        //视窗可视区域高度
        let visualHeight = window.innerHeight          //浏览器可视区域高度,标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        let {screen1,screen2,screen3,screen4,screen5} = this.childNodes
        this.setState({scrollTop})
        if(0 <= screen1.offsetBottom ){
            this.setState({ outlineActive:'outline_active_1'})
        }else if(0 <= screen2.offsetBottom){
            this.setState({ outlineActive:'outline_active_2'})
        }else if(0 <= screen3.offsetBottom){
            this.setState({ outlineActive:'outline_active_3'})
        }else if(0 <= screen4.offsetBottom ){
            this.setState({ outlineActive:'outline_active_4'})
        }else if(0 <= screen5.offsetBottom){
            this.setState({ outlineActive:'outline_active_5'})
        }
    }
    render() {
        let {scrollTop,outlineActive} = this.state
        return (
        <div className="mooc-mobile-container" ref = {(node)=>{this.node = node}} onScroll={this.setScrollTop.bind(this)}> 
            <Screen1 scrollTop = {scrollTop} ref={(node)=>this.childNodes.screen1=node}/>
            <Screen2 scrollTop = {scrollTop} ref={(node)=>this.childNodes.screen2=node}/>
            <Screen3 scrollTop = {scrollTop} ref={(node)=>this.childNodes.screen3=node}/>
            <Screen4 scrollTop = {scrollTop} ref={(node)=>this.childNodes.screen4=node}/>
            <Screen5 scrollTop = {scrollTop} ref={(node)=>this.childNodes.screen5=node}/>
            <Buy/>
            <Outline outlineActive={outlineActive}/>
            <footer className="footer">
               © 2016 imooc.com  京ICP备13046642号
             </footer>
        </div>)
    }
}

export default XiaoMiMobile