
class MobileTouchEvents{

  constructor(node,options){
    this.node = node; //将事件绑定到该节点
    this.options =  {
      direction : "horizontal"
    }
    Object.assign(this.options,options);//对事件进行定制
    this.nodeWidth = Math.round(this.node.getBoundingClientRect().width || this.node.offsetWidth);
    this.nodeHeight = Math.round(this.node.getBoundingClientRect().Height || this.node.offsetHeight);

    this.node.addEventListener('touchstart',touchStartHandle.bind(this), false);  
    function touchStartHandle(event){
      this.slideInfo ={
        slideTo:undefined,//滑动方向:上下左右
        distance:0//滑动距离
      };
      this.delta = {//x轴，y轴的滑动距离
        x: 0,
        y: 0
      };
      let touches = event.touches[0]; // measure start values
      this.startPosition = {// get initial touch coords
        x: touches.pageX,
        y: touches.pageY,
      };
      this.time = +new Date();//触摸时间，当触摸结束时用于得到触摸移动速度
      let x = this.startPosition.x;
      let y = this.startPosition.y;
      this.touchStartCallback && this.touchStartCallback({x,y},event);
    }

    this.node.addEventListener('touchmove',touchMoveHandle.bind(this), false);  
    function touchMoveHandle(event){
      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;
      let touches = event.touches[0];
      // measure change in x and y
      this.delta = {
        x: touches.pageX - this.startPosition.x,
        y: touches.pageY - this.startPosition.y
      };
      //this.options.direction 
      if(this.options.direction == "vertical"){
        Object.assign(this.slideInfo,{slideTo:this.delta.y > 0 ? "down" : "up",distance:Math.abs(this.delta.y)})
        this.touchMoveCallback({slideTo:this.slideInfo.slideTo,distance:this.slideInfo.distance},event);
      }else{
        Object.assign(this.slideInfo,{slideTo:this.delta.x > 0 ? "right" : "left",distance:Math.abs(this.delta.x)});
        let slideTo = this.slideInfo.slideTo;
        let distance = this.slideInfo.distance;
        this.touchMoveCallback && this.touchMoveCallback({slideTo,distance},event);
      }
    }

    this.node.addEventListener('touchend',touchEndHandle.bind(this), false);
    function touchEndHandle(event){
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;
      let touches = event.touches[0];
      // measure duration
      let duration = +new Date() - this.time;
      //this.options.direction :0--上下，1--前后
      if(this.options.direction == 0){
        var isValidSlide =
            Number(duration) < 250 &&         // if slide duration is less than 250ms
            Math.abs(this.delta.y) > 20 ||         // and if slide amt is greater than 20px
            Math.abs(this.delta.y) > this.nodeHeight/2;      // or if slide amt is greater than half the width
      }else{
        var isValidSlide =
            Number(duration) < 250 &&         // if slide duration is less than 250ms
            Math.abs(this.delta.x) > 20 ||         // and if slide amt is greater than 20px
            Math.abs(this.delta.x) > this.nodeWidth/2;      // or if slide amt is greater than half the width
      }
      let slideTo = this.slideInfo.slideTo;
      let distance = this.slideInfo.distance;
      this.touchEndCallback &&　this.touchEndCallback({slideTo,distance,isValidSlide},event);
    }

  }

  addTouchStartCallback(callback){
    this.touchStartCallback = callback;
    return this;
  }

  addTouchMoveCallback(callback){
    this.touchMoveCallback = callback;
    return this;
  }
  
  addTouchEndCallback(callback){
    this.touchEndCallback = callback;
    return this
  }
}
module.exports = MobileTouchEvents;