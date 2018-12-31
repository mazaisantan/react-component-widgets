import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './scrollLoading.scss';

class ScrollLoading extends React.Component {
    constructor(props){
        super(props);      
    }

    componentDidMount() {
        var offsetInfoLog = (()=>{
            var loadFlag = false;
            return ()=>{
                //浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
                let scrollDistance = document.documentElement.scrollTop //兼容ie低版本的标准模式
                                  || window.pageYOffset              //IE9+及标准浏览器
                                  || document.body.scrollTop;        //兼容混杂模式；
                //console.log('垂直滚动条滚动距离:'+scrollDistance);//浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离

                //浏览器可视区域高度
                let visualHeight = window.innerHeight                         //标准浏览器及IE9+ 
                                || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
                                || document.body.clientHeight              //低版本混杂模式
                //console.log('可视区高度:' + visualHeight);//浏览器可视区域高度

                let curElementStyle = this.node.currentStyle || document.defaultView.getComputedStyle(this.node)//如果原先是通过外部或内部样式表定义css样式，必须使用o.currentStyle[xxx] || document.defaultView.getComputedStyle(0)[xxx]来获取样式值
                //console.log('元素高度：'+(parseInt(curElementStyle.height) + parseInt(curElementStyle.paddingTop)));//获取元素的尺寸


                //返回元素相对于文档document顶部距离
                let elementOffsetTop = this.node.offsetTop;
                //console.log('元素距离文档顶部距离：' + elementOffsetTop);

                if(elementOffsetTop < scrollDistance+visualHeight && loadFlag == false){
                loadFlag = true;
                console.log('开始加载图片。。。。。')
                }
            }
            
        })();
        //window.addEventListener('scroll', this.handler.bind(this),false)
        function regScroll(offsetInfoLog) {
            if (window.onscroll === null) {
                window.onscroll = offsetInfoLog
            } else if (typeof window.onscroll === 'function') {
                var oldHandler = window.onscroll;
                window.onscroll = function () {
                    offsetInfoLog();
                    oldHandler();
                }
            }
        }
        //添加事件监听
        regScroll(offsetInfoLog.bind(this));

        
    }
    
    componentWillUnmount() {
        removeScrollHandler();
        //window.removeEventListener('scroll', this.handler.bind(this),false)
        //删除所有事件监听
        function removeScrollHandler(){
            window.onscroll=''
        }
  
    }
      
    
    
    

    render() {
        return (
        <div className="scrollLoading-container">
            <img src={require('./scrollLoading.png')} ref = {(node=>{this.node = node})}>
            </img>
        </div>
        )
    }
}

ScrollLoading.propTypes = {

}
export default ScrollLoading