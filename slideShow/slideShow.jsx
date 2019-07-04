import React from 'react'
import ReactDOM from 'react-dom'
import './slideShow.scss'


class SlideShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      slideCnt:0,
      curSlideI:0
    }
    if(this.props.children == undefined){
      throw "you have to define something in the <SlideShow></SlideShow>"
    }
    this.state.slideCnt = this.props.children.length;

  }

  slideDec(){
    if(this.state.curSlideI == 0){
      this.setState({curSlideI:this.state.slideCnt-1});
    }else{
      this.setState({curSlideI:this.state.curSlideI-1});
    }
  }
  slideInc(){
    if(this.state.curSlideI == this.state.slideCnt-1){
      this.setState({curSlideI:0});
    }else{
      this.setState({curSlideI:this.state.curSlideI+1});
    }
  }
  setCurSlide(index){
    this.setState({curSlideI:index});
  }
  componentDidMount(){
    console.log(this.slideTimer);
    if(this.slideTimer != undefined){
      clearInterval(this.slideTimer);
    }
    this.slideTimer = setInterval(()=>{
      this.slideInc();
    },2000);
  }

  componentDidUpdate(){
    console.log(this.slideTimer);
    if(this.slideTimer != undefined){
      clearInterval(this.slideTimer);
    }
    this.slideTimer = setInterval(()=>{
      this.slideInc();
    },2000);
  }
  render(){
    return(
      <div className="slideShow">

        <div className="slideShow-header">
        </div> 

        <div className="slideShow-body">
          {React.Children.map(this.props.children,(child,index)=>{
            let numberTextStr = (index+1) + '/' + this.state.slideCnt;
            let numberTextElement = React.createElement('div',{className:'numberText'},numberTextStr);
            let textElement =React.createElement('div',{className:'text'},child.props.alt);
            let slideFrameName = this.state.curSlideI == index ? 'slideFrame selected' : 'slideFrame';
            return React.createElement('div',{className:slideFrameName},textElement,numberTextElement,child);
          })}

          <a className="prev" onClick={this.slideDec.bind(this)}>&lt;</a>
          <a className="next" onClick={this.slideInc.bind(this)}>&gt;</a>

          <div className="dots" style={{textAlign:"center"}} ref={(node)=>{this.node = node}}>
            {React.Children.map(this.props.children,(child,index)=>{
              let dotName = this.state.curSlideI == index ? 'dot selected' : 'dot';
              return React.createElement('span',{className:dotName,onClick: ((x) => { this.setCurSlide(x)}).bind(this,index)});
            })}
          </div>
        </div>

        <div className="slideShow-footer">
        </div>
      </div>
    );
  }
}


var SlideShowWrapper= ()=>(
  <SlideShow>
          <img src={require("./img_nature_wide.jpg")} alt='Caption Text' style={{width:'100%'}}/>
          <img src={require("./img_fjords_wide.jpg")} alt='Caption Two' style={{width:'100%'}}/>
          <img src={require("./img_mountains_wide.jpg")} alt='Caption Three' style={{width:'100%'}}/>
  </SlideShow>
)

export default SlideShowWrapper;