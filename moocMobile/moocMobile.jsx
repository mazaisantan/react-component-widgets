import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './moocMobile.scss';
import './animate.scss'
// import './init-animate.scss'
import Screen1 from './screen1/screen1.jsx'
import Screen2 from './screen2/screen2.jsx'
import Screen3 from './screen3/screen3.jsx'
import Screen4 from './screen4/screen4.jsx'
import Screen5 from './screen5/screen5.jsx'
import Buy from './buy/buy.jsx'
import Outline from './outline/outline.jsx'

class MoocMobile extends React.Component {
    constructor(props){
        super(props);      
        this.state = {
            scrollTop:0,
            outlineActive:'outline_active_1'//1/2/3/4/5
        }

        this.childNode = {
            screen1:undefined,
            screen2:undefined,
            screen3:undefined,
            screen4:undefined,
            screen5:undefined
        }
    }

    setScrollTop(){
        let scrollTop = this.node.scrollTop
        let {screen1,screen2,screen3,screen4,screen5} = this.childNode
        this.setState({scrollTop})
        if(scrollTop<screen1.offsetBottom){
            this.setState({ outlineActive:'outline_active_1'})
        }else if(scrollTop<screen2.offsetBottom){
            this.setState({ outlineActive:'outline_active_2'})
        }else if(scrollTop<screen3.offsetBottom){
            this.setState({ outlineActive:'outline_active_3'})
        }else if(scrollTop<screen4.offsetBottom){
            this.setState({ outlineActive:'outline_active_4'})
        }else if(scrollTop<screen5.offsetBottom){
            this.setState({ outlineActive:'outline_active_5'})
        }
    }
    render() {
        return (
        <div className="mooc-mobile-container" ref = {(node)=>{this.node = node}} onScroll={this.setScrollTop.bind(this)}> 
            <Screen1 scrollTop = {this.state.scrollTop} ref={(node)=>this.childNode.screen1=node}/>
            <Screen2 scrollTop = {this.state.scrollTop} ref={(node)=>this.childNode.screen2=node}/>
            <Screen3 scrollTop = {this.state.scrollTop} ref={(node)=>this.childNode.screen3=node}/>
            <Screen4 scrollTop = {this.state.scrollTop} ref={(node)=>this.childNode.screen4=node}/>
            <Screen5 scrollTop = {this.state.scrollTop} ref={(node)=>this.childNode.screen5=node}/>
            <Buy/>
            <Outline outlineActive={this.state.outlineActive}/>
            <footer class="footer">
               © 2016 imooc.com  京ICP备13046642号
             </footer>
        </div>)
    }
}

MoocMobile.propTypes = {

}
export default MoocMobile