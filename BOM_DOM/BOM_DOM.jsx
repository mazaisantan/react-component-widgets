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
        // let computedstyle1 = this.node.currentStyle
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
    clickEvent(evt){
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

    scrollEvent(){
        //该节点的滚动距离
        let scrollTop = this.node.scrollTop
    }

    //记录鼠标按下，鼠标移动，鼠标松开事件
    mouseEvent(evt){
        //触发的事件类型
        let evtType = evt.type
        switch(evtType){
            case 'mousedown': {
                this.mouseDown = true
                this.mouseDownPos = {
                    x: evt.clientX || evt.x,//点击位置距离当前body可视区域的x，y坐标
                    y: evt.clientY || evt.y
                }
                //可选的onMouseUp
                // document.addEventListener("mouseup", ()=>{
                //     this.mouseDown = false
                // })
                break
            }
            case 'mousemove': {
                if(this.mouseDown){
                    let {x,y} = this.mouseDownPos
                    //移动的距离
                    let {cx,cy} = {
                        cx: evt.clientX - x,
                        cy: evt.clientY - y
                    }
                    return {cx,cy}
                }
                break
            }
            //这种方式有弊端，必须在监听区域松开才能触发
            case 'mouseup': {
                this.mouseDown = false
                break
            }
            default:
                break
        }
    }
    render() {
        return (
            <div className="bom-dom-container" ref={node=>{this.node = node}} 
                onClick={this.clickEvent.bind(this)}
                onScroll={this.scrollEvent.bind(this)}
                onMouseDown={this.mouseEvent.bind(this)}
                onMouseMove={this.mouseEvent.bind(this)}
                onMouseUp={this.mouseEvent.bind(this)}
                >
            </div>
        )
    }
}

export default BOM_DOM