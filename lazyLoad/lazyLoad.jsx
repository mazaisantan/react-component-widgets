import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './lazyLoad.scss';

class LazyLoad extends React.Component {
    constructor(props){
        super(props);   
        this.state = {
            loadFlag:false,
            offsetTop:window.innerHeight                      
                    || document.documentElement.clientHeight   
                    || document.body.clientHeight,           
            parentOffsetTop:0,
            visualHeight:window.innerHeight                         //浏览器可视区域高度,标准浏览器及IE9+ 
                        || document.documentElement.clientHeight   //标准浏览器及低版本IE标准模式 
                        || document.body.clientHeight,              //低版本混杂模式
            scrollTop:0       
        }
        this.offsetTop = window.innerHeight                      
                        || document.documentElement.clientHeight   
                        || document.body.clientHeight
    }
    componentDidMount(){
        this.setState({offsetTop:this.node.getBoundingClientRect().top})
        this.offsetTop = this.node.getBoundingClientRect().top
    }

    componentWillReceiveProps(){
        this.state.offsetTop = this.node.getBoundingClientRect().top
        this.offsetTop = this.node.getBoundingClientRect().top
    }

    render() {
        this.state.scrollTop = this.props.scrollTop
        this.state.parentOffsetTop = this.props.parentOffsetTop
        let {loadFlag,offsetTop,parentOffsetTop,visualHeight,scrollTop} = this.state
        //console.log(this.state)
        if((this.offsetTop - parentOffsetTop) < (scrollTop+visualHeight) && loadFlag == false){
            console.log('index'+this.props.index+':'+this.offsetTop)
            this.state.loadFlag = true;
            console.log('开始加载图片。。。。。')
        }else{
            
        }
        return (
            <div className="lazy-load-container" ref={(node)=>{this.node=node}}>
               {
                this.state.loadFlag == false ?
                    <div className="" style={{height:'1px'}}>
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