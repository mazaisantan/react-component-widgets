import React from 'react'
import './bidirectionalLine.scss'

class BidirectionalLine extends React.Component {
    constructor(props){
        super(props);      
    }

    setLineLength(){
        //浏览器可视区域高度
        let visualHeight = window.innerHeight          //标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        //该节点的滚动距离
        let scrollTop = this.node.scrollTop
        scrollTop = scrollTop + visualHeight/2
        //双向绑定触发，设置节点的高度
        this.lineLength = scrollTop
    }

    bindData(node){
        this.bindDataImp(node,this,'lineLength')
    }

    //设置双向绑定，参数分别为节点，组件实例，数据名称
    bindDataImp(node,self,param){
        Object.defineProperty(self,param,{
            get : function(){
              return node.style.height
            },
            set : function(newValue){
                node.style.height = newValue + 'px'
                node.style.paddingTop = (newValue-20) + 'px'
                node.childNodes[0].data = 'height:' + newValue
            },
            enumerable : true,
            configurable : true
          });
    }

    componentDidMount(){
        let visualHeight = window.innerHeight          //标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        //设置初始长度
        this.lineLength = visualHeight/2
    }

    render() {
        return (
            <div className="bidirectional-line-container" onScroll={this.setLineLength.bind(this)} ref={(node)=>{this.node = node}}>
                <div className='data-line-wrapper'>
                    <div className='data-line' ref={this.bindData.bind(this)}>
                        {'heightss'}
                    </div>
                </div>
            </div>
        )
    }
}

export default BidirectionalLine