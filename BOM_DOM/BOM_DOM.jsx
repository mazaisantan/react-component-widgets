import React from 'react';
import './BOM_DOM.scss';

//获得点击、滚动、节点的属性
class BOM_DOM extends React.Component {
    constructor(props){
        super(props);      
    }
    componentDidMount(){
        //获得node节点的长、宽、可视区域的x、y坐标
        let {width,height,left,top} = this.node.getBoundingClientRect()
        //行内样式
        let style = this.node.style
        //渲染后的样式
        let computedstyle1 = this.node.currentStyle
        let computedstyle2 =  document.defaultView.getComputedStyle(this.node)
        //浏览器可视区域高度
        let visualHeight = window.innerHeight          //标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        //浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
        let scrollDistance = document.documentElement.scrollTop //兼容ie低版本的标准模式
            || window.pageYOffset              //IE9+及标准浏览器
            || document.body.scrollTop;        //兼容混杂模式；
        //返回元素相对于文档document顶部距离
        let elementOffsetTop = this.node.offsetTop
    }
    clickFunction(evt){
        //点击位置距离当前body可视区域的x，y坐标
        let clientX = evt.clientX || evt.x
        let clientY = evt.clientY || evt.y
        //对于整个页面来说的x，y坐标，包括了被卷去的body部分的长度
        let pageX = evt.pageX
        let pageY = evt.pageY
        //点击位置距离当前电脑屏幕的x，y坐标
        let screenX = evt.screenX
        let screenY = evt.screenY
        //相对于带有定位的父盒子的x，y坐标
        let offsetX = evt.offsetX
        let offsetY = evt.offsetY
        //触发事件的那个具体对象
        let target = evt.target
        //绑定事件的对象
        let currentTarget = evt.currentTarget
    }
    render() {
        return (
            <div className="bom-dom-container" ref={node=>{this.node = node}} onClick={this.clickFunction}>
            </div>
        )
    }
}

export default BOM_DOM