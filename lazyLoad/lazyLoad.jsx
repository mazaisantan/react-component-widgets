import React from 'react'
import './lazyLoad.scss'

class LazyLoad extends React.Component {
    constructor(props){
        super(props)  
        this.state = {
            loadFlag:false   
        }
        this.loadFlag = false
    }

    componentDidMount(){
        //因为加载后才知道控件位置，触发更新
        this.setState({})
    }

    shouldComponentUpdate(){
        let {loadFlag} = this
        //视窗可视区域高度
        this.visualHeight = window.innerHeight         //浏览器可视区域高度,标准浏览器及IE9+ 
            || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
            || document.body.clientHeight              //低版本混杂模式
        //图片已经加载，无需继续更新
        if(loadFlag == true){
            return false
        }
        //当待加载图片进入视线区域，则置this.loadFlag = true,加载图片
        if(loadFlag == false && this.node != undefined){
            let offsetTop = this.node.getBoundingClientRect().top
            if(offsetTop <= this.visualHeight){
                this.loadFlag = true
            }else if(offsetTop > this.visualHeight){
                return false
            }
        }
        return true
    }

    render() {
        let {index} = this.props
        let {loadFlag} = this
        console.log('index:'+index+'loadFlag:'+loadFlag)
        return (
            <div className="lazy-load-container" ref={(node)=>{this.node=node}}>
               {
                loadFlag == false ?
                    <div className="">
                    </div>
                :
                    <img src={require('./img.png')} alt="Avatar"/>
                }
            </div>)
    }
}

LazyLoad.propTypes = {

}


export default LazyLoad