import React from 'react';
import ReactDOM from 'react-dom';
import './swipe.scss';
import MobileTouchEvents from './touch_event.js'


class React_Swipe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nodeWidth : 0,//根据节点宽度设置slide的宽度
      curSlide : 0 ,
      slidesPosition : []
    }
    if(this.props.children == undefined){
      throw "you have to define something in the <React_Swipe></React_Swipe>"
    }
    let length = this.props.children.length == undefined ? 1 : this.props.children.length;
    for(let i = 0;i < length;i++){
      this.state.slidesPosition[i] = i;
    }

    // this.state.slidesPosition = this.getSlidesPosition(this.state.curSlide,this.state.slidesPosition); 
    
    
  }
  getSlidesPosition(curSlide,slidesPosition,slideTo){
/*      if(curSlide >= slidesPosition.length){
        throw "curSlide must lt slideCnt";
      }*/
      if(curSlide == undefined){
        return slidesPosition;
      }
      if(slidesPosition.length == 2){
        if(slidesPosition.indexOf(curSlide) == slidesPosition.length - 1 && slideTo == "left"){
          let tempSlide = slidesPosition.shift();
          slidesPosition.push(tempSlide);
        }else if(slidesPosition.indexOf(curSlide) == 0 && slideTo == "right"){
          let tempSlide = slidesPosition.pop();
          slidesPosition.unshift(tempSlide);
        }
      }else if(slidesPosition.length >= 3){
        if(slidesPosition.indexOf(curSlide) == 0){
          let tempSlide = slidesPosition.pop();
          slidesPosition.unshift(tempSlide);
        }else if(slidesPosition.indexOf(curSlide) == slidesPosition.length-1){
          let tempSlide = slidesPosition.shift();
          slidesPosition.push(tempSlide);
        }
      }
      return slidesPosition;     
    }
    isAfterCurSlide(index){
      return this.state.slidesPosition.indexOf(index) < this.state.slidesPosition.indexOf(this.state.curSlide) ? 
                                              -1: this.state.slidesPosition.indexOf(index) == this.state.slidesPosition.indexOf(this.state.curSlide) ?
                                              0 : 1;
    }
  componentDidMount(){
    let width = Math.round(this.node.getBoundingClientRect().width || this.node.offsetWidth);
    width = parseInt(width);
    this.setState({nodeWidth:width});
    let myTouchEvents = new MobileTouchEvents(this.node);
    myTouchEvents.addTouchStartCallback(touchStartCallback.bind(this))
                 .addTouchMoveCallback(touchMoveCallback.bind(this))
                 .addTouchEndCallback(touchEndCallback.bind(this));
    function touchStartCallback(info){
      for(let i = 0;i < this.state.slidesPosition.length;i++){
        this.node.children[1].children[i].style.transitionDuration = '0ms';
      } 
      this.curDirection = undefined;
    }
    function touchMoveCallback(info){
      let curSlideIndex = this.state.slidesPosition.indexOf(this.state.curSlide);
      let curSlide = this.state.slidesPosition[curSlideIndex];
      let prevSlideIndex = curSlideIndex - 1;
      let prevSlide = this.state.slidesPosition[prevSlideIndex];
      let nextSlideIndex = curSlideIndex + 1;
      let nextSlide = this.state.slidesPosition[nextSlideIndex];
      
      if(info.slideTo == "right"){
        if(this.curDirection != "right"){
          this.curDirection = "right";
          this.state.slidesPosition = this.getSlidesPosition(curSlide,this.state.slidesPosition,"right");
          this.setState({curSlide});    
        }
        this.node.children[1].children[curSlide].style.transform = 'translate('+info.distance+'px)';         
        if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transform = 'translate('+ (-this.state.nodeWidth + info.distance)+'px)';
      }else if(info.slideTo == "left"){
        if(this.curDirection != "left"){
          this.curDirection = "left";
          this.state.slidesPosition = this.getSlidesPosition(curSlide,this.state.slidesPosition,"left");
          this.setState({curSlide});    
        }
        this.node.children[1].children[curSlide].style.transform = 'translate('+(-info.distance)+'px)';
        if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transform = 'translate('+(this.state.nodeWidth - info.distance)+'px)';
      }  
    }
    function touchEndCallback(info){
      console.log(this.state.slidesPosition);
      let curSlideIndex = this.state.slidesPosition.indexOf(this.state.curSlide);
      let curSlide = this.state.slidesPosition[curSlideIndex];
      let prevSlideIndex = curSlideIndex - 1 ;
      let prevSlide = this.state.slidesPosition[prevSlideIndex];
      let nextSlideIndex = curSlideIndex + 1;
      let nextSlide = this.state.slidesPosition[nextSlideIndex];
      let speed = this.state.nodeWidth / 800;
      console.log(this.state.curSlide);  
      if(info.slideTo == "right"){   
        if(info.isValidSlide){
          this.node.children[1].children[curSlide].style.transitionDuration = (this.state.nodeWidth - info.distance )/ speed + 'ms'; 
          if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transitionDuration = (this.state.nodeWidth - info.distance ) / speed + 'ms'; 
          curSlide = prevSlideIndex < 0 ? curSlide : this.state.slidesPosition[prevSlideIndex];
          this.state.slidesPosition = this.getSlidesPosition(curSlide,this.state.slidesPosition); 
        }else{  
          this.node.children[1].children[curSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          this.node.children[1].children[curSlide].style.transform = 'translate('+0+'px)';        
          if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transform = 'translate('+ -this.state.nodeWidth+'px)';
        }
        
      }else if(info.slideTo == "left"){
        if(info.isValidSlide){
          this.node.children[1].children[curSlide].style.transitionDuration = (this.state.nodeWidth - info.distance )/ speed + 'ms'; 
          if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transitionDuration = (this.state.nodeWidth - info.distance ) / speed + 'ms'; 
          curSlide = nextSlideIndex >= this.state.slidesPosition.length ? curSlide : this.state.slidesPosition[nextSlideIndex];
          this.state.slidesPosition = this.getSlidesPosition(curSlide,this.state.slidesPosition); 
        }else{
          this.node.children[1].children[curSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          this.node.children[1].children[curSlide].style.transform = 'translate('+0+'px)';
          if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transform = 'translate('+(this.state.nodeWidth)+'px)';
        }
      }
      if(curSlide == this.state.curSlide){
          this.node.children[1].children[curSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          this.node.children[1].children[curSlide].style.transform = 'translate('+0+'px)';        
          if(prevSlide != undefined)this.node.children[1].children[prevSlide].style.transform = 'translate('+ -this.state.nodeWidth+'px)';
          if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transitionDuration = info.distance / speed + 'ms'; 
          if(nextSlide != undefined)this.node.children[1].children[nextSlide].style.transform = 'translate('+(this.state.nodeWidth)+'px)';
      }
      this.setState({curSlide});   
    }
  }
  render(){
    return(
      <div className="swipe-container" ref={(node)=>{this.node = node}}>
        <div className="swipe-header">
          {React.Children.map(this.props.children,(child,index)=>{
            return (<div key={index} style={{flexGrow:"1"}} className={this.state.curSlide == index ? "select" : ""}>{child.props.title}</div>);
          })}
        </div>

        <div className="swipe-body">
          {React.Children.map(this.props.children,(child,index)=>{
            return React.cloneElement(child,{style:{width:this.state.nodeWidth,
                                              transform:'translate(' + this.isAfterCurSlide(index)*this.state.nodeWidth + 'px)'
                                      }});
          })}
        </div>

        <div className="swipe-footer" style={{}}>
          {React.Children.map(this.props.children,(child,index)=>{
            return (<div key={index} style={{}} className={this.state.curSlide == index ? "select" : ""}></div>);
          })}
        </div>
      </div>
    );
  }
}

var React_Swipe_Wrapper = ()=>(
  <React_Swipe>
    <div title="1">11xx1(请在手机页面下运行)</div>
    <div title="2">22222(请在手机页面下运行)</div>
    <div title="3">333333(请在手机页面下运行)</div>
  </React_Swipe>
)

export default React_Swipe_Wrapper