import React from 'react';
import ReactDOM from 'react-dom';
import './swipe.scss';
import MobileTouchEvents from './touch_event.js'
// import {invariant} from '../util/assert.js'

const SlideSpeed = {
  none:0,
  slow:500,
  normal:200,
  quick:100
}


class React_Swipe extends React.Component{
  constructor(props){
    super(props)
    let {children,header,navButton,footer,carouselTime} = this.props
    if(children == undefined){
      return
    }
    // invariant(children,"you have to define something in the <React_Swipe></React_Swipe>")

    this.timer = new Date()
    this.state = {
      allFramesOffset:0,
      framesPosition:[],
      transitionDuration:0,
      nodeWidth:0
    }
    this.config = {
      slideSpeed:0,
      carouselTime:carouselTime ? carouselTime : 100,//小于slideSpeed，则轮播时间作废，
      header:header ? header : false,
      navButton:navButton ? navButton : false,
      footer:footer ? footer : true
    }

    let {framesPosition} = this.state
    this.framesPositionInit(framesPosition,children)  
    this.arrangeFramesPositionImpl(framesPosition)
  }
    
  moveToImpl(targetFrameIndex,framesPosition){
    let targetFramePosition = framesPosition[targetFrameIndex]
    for(let i = 0;i < framesPosition.length;i++){
      framesPosition[i] -= targetFramePosition
    }
  }

  moveTo(targetFrameIndex){
    let {framesPosition,nodeWidth} = this.state
    let {slideSpeed} = this.config
    this.moveToImpl(targetFrameIndex,framesPosition)
    this.setState({transitionDuration:nodeWidth/slideSpeed})
    this.startCarouselTimer()
  }

  framesStepImpl(positionSteps,framesPosition){
    let framesCnt = framesPosition.length
    if(framesCnt == 1){
      return
    }
    let upperLimit = Math.ceil((framesCnt-1)/2)
    let lowerLimit = -Math.floor((framesCnt-1)/2)
    if(typeof positionSteps != 'number'){
      return
    }
    positionSteps = Math.ceil(positionSteps)
    // if(lowerLimit + positionSteps > 0 || positionSteps + upperLimit < 0){
    //   return
    // }
    for(let i = 0;i < framesPosition.length;i++){
      framesPosition[i] += positionSteps
    }
  }

  framesStep(positionSteps){
    let {framesPosition,nodeWidth} = this.state
    let {slideSpeed} = this.config
    
    this.framesStepImpl(positionSteps,framesPosition)
    this.setState({transitionDuration:nodeWidth/slideSpeed})
    this.startCarouselTimer()
  }
  arrangeFramesPositionImpl(framesPosition,slideTo){
    let framesCnt = framesPosition.length
    if(framesCnt == undefined){
      framesCnt = 1
    }
    let upperLimit = Math.ceil((framesCnt-1)/2)
    let lowerLimit = -Math.floor((framesCnt-1)/2)
    for(let i = 0;i < framesCnt;i++){
      if(framesPosition[i] > upperLimit){
        framesPosition[i] -= framesCnt
      }else if(framesPosition[i] < lowerLimit){
        framesPosition[i] += framesCnt
      }
    }
    if(framesCnt == 2 && slideTo == 'right'){
      for(let i = 0;i < framesCnt;i++){
        if(framesPosition[i] == upperLimit){
          framesPosition[i] -= framesCnt
        }
      }
    }
  }

  arrangeFramesPosition(slideTo){
    let {framesPosition} = this.state
    this.arrangeFramesPositionImpl(framesPosition,slideTo)
    this.setState({transitionDuration:0})
    this.cancelCarouselTimer()
  }

  framesPositionInit(framesPosition,children){
    let cnt = children.length
    if(cnt == undefined){
      cnt = 1
    }
    for(let i=0;i < cnt;i++){
      framesPosition[i] =  i
    }
  }

  startCarouselTimer(){
    let {carouselTime} = this.config
    if(carouselTime < 800){
      return
    }
    this.carouselTimer = setTimeout(()=>{
      this.arrangeFramesPosition('left')
      this.node.getBoundingClientRect()//强制回流
      this.framesStep(-1)
    },carouselTime)
    
  }
  cancelCarouselTimer(){
    if(this.carouselTimer == undefined){
      return
    }
    clearTimeout(this.carouselTimer)
  }

  componentDidMount(){
    let {nodeWidth} =  this.state
    let width = Math.round(this.node.getBoundingClientRect().width || this.node.offsetWidth)
    width = parseInt(width)
    this.config.slideSpeed = width/400
    let myTouchEvents = new MobileTouchEvents(this.node);
    myTouchEvents.addTouchStartCallback(touchStartCallback.bind(this))
                 .addTouchMoveCallback(touchMoveCallback.bind(this))
                 .addTouchEndCallback(touchEndCallback.bind(this))
    this.setState({nodeWidth:width})
    this.startCarouselTimer()
    function touchStartCallback(info){
      this.setState({transitionDuration:0})
      this.cancelCarouselTimer()
    }
    function touchMoveCallback(info){
      let {slideSpeed} = this.config
      let {framesPosition,allFramesOffset,nodeWidth} = this.state
      this.cancelCarouselTimer()
      if(info.slideTo == "right"){
        this.arrangeFramesPositionImpl(framesPosition,'right')
        this.setState({allFramesOffset:info.distance})
      }else if(info.slideTo == "left"){
        this.arrangeFramesPositionImpl(framesPosition,'left')
        this.setState({allFramesOffset:-info.distance})
      }  
    }
    function touchEndCallback(info){
      let {slideSpeed} = this.config
      let {framesPosition,allFramesOffset,nodeWidth} = this.state
      this.state.allFramesOffset = 0
      if(info.slideTo == "right"){   
        if(info.isValidSlide){
          this.framesStepImpl(1,framesPosition)
          this.setState({transitionDuration:(nodeWidth - info.distance)/slideSpeed})
        }else{  
          this.setState({transitionDuration:info.distance/slideSpeed})
        }
        
      }else if(info.slideTo == "left"){
        if(info.isValidSlide){
          this.framesStepImpl(-1,framesPosition)
          this.setState({transitionDuration:(nodeWidth - info.distance)/slideSpeed})
        }else{
          this.setState({transitionDuration:info.distance/slideSpeed})
        }
      }
      this.startCarouselTimer()
    }
  }
  render(){
    let {children} = this.props
    let {allFramesOffset,framesPosition,transitionDuration,nodeWidth} = this.state
    let {header,navButton,footer} = this.config
    return(
      <div className="swipe-container" ref={(node)=>{this.node = node}}>
        {header ? 
        <div className="swipe-header">
          { React.Children.map(children,(child,i)=>{
            let {title} =  child.props
            return (<div key={i} style={{flexGrow:"1"}} onMouseDown={this.arrangeFramesPosition.bind(this)} onMouseUp={this.moveTo.bind(this,i)} className={framesPosition[i] == 0 ? "select" : ""}>{title}</div>);
          })}
        </div> : null}

        <div className="swipe-body">
          {React.Children.map(children,(child,i)=>{
            let swipeBodyStyle = {width:nodeWidth,transform:'translate(' + (framesPosition[i]*nodeWidth+allFramesOffset) + 'px)',transitionDuration:transitionDuration+'ms'}
            return React.cloneElement(child,{className:'frame',style:swipeBodyStyle})
          })}
          {navButton ? 
          <div className='nav-button'>
            <div className='left-button' onMouseDown={this.arrangeFramesPosition.bind(this,'right')} onMouseUp={this.framesStep.bind(this,1)}>&lt;</div> 
            <div className='right-button' onMouseDown={this.arrangeFramesPosition.bind(this,'left')} onMouseUp={this.framesStep.bind(this,-1)}>&gt;</div>
          </div>:null}
        </div>

        {footer ? 
        <div className="swipe-footer" style={{}}>
          {React.Children.map(children,(child,i)=>{
            return (<div key={i} className={framesPosition[i] == 0 ? "select" : ""}></div>);
          })}
        </div>:null}
      </div>
    );
  }
}

export default React_Swipe
