import React from 'react'
import './axis.scss'

class Axis extends React.Component {
    constructor(props){
        super(props);  
        this.backgroundConfig = {
            stripType:'bar',//'line'\'bar'
            stripLength:100
        }
        this.state = {
            orientation:'vertical',//horizontal/vertical
            data:['我的','xxxxxx'],
            length:50
        }   
        let {data} = this.props
        if(data != undefined){
            this.state = data
        } 
    }

    setAxisOrientation(str){
        this.setState({orientation:str});
        return this;
    }

    setAxisData(data){
        this.setState({data});
        return this;
    }

    setAxislength(length){
        this.setState({length});
        return this;
    }

    shouldComponentUpdate(){
        let {data} = this.state
        if(data == undefined || data.length == 0 || data.length == 1){
            return false;
        }else{
            return true;
        }
    }

    getAxisPathStr(){
        let axisPathStr = null;
        let {length,orientation} = this.state
        switch(this.state.orientation){
            case 'horizontal':
                return (axisPathStr = 'M0,0H' + this.state.length);
            case 'vertical':
                return (axisPathStr = 'M0,0V' + this.state.length);
            default:
                return (axisPathStr = 'M0,0');
        }
    }

    getCoorTranslateStr(index,paddingBegin,paddingEnd){
        let {length,data,orientation} = this.state
        let translateDistance = index*((length-paddingBegin-paddingEnd)/(data.length-1));
        var coordTranslateStr = undefined;
        switch(orientation){
            case 'horizontal':
                return coordTranslateStr = 'translate(' + (translateDistance+paddingBegin) +',0)';
            case 'vertical':
                return coordTranslateStr = 'translate(0,' + (length - translateDistance-paddingBegin) +')';
            default:
                return coordTranslateStr = 'translate(0,0)';
        }
    }

    getTextPosition(item){   
        let textPosition = {x:'0',y:'0'}
        let {orientation} = this.state
        item = item.toString()
        let itemLength = 0;
        let itemHeight = 0;
        switch(orientation){
            case 'horizontal':
                itemLength = 0;
                for(let i=0;i<item.length;i++){
                    if(item.match(/[\u4e00-\u9fa5]/g)){//中文字符
                        itemLength++;
                    }else{
                        itemLength = itemLength + 0.5;
                    }
                }
                return textPosition = {x:((-0.5*itemLength) + 'em'),y:'1.5em'};
            case 'vertical':
                itemLength = 0;
                itemHeight = 0.5;
                for(let i=0;i<item.length;i++){
                    if(item.match(/[\u4e00-\u9fa5]/g)){//中文字符
                        itemLength ++;
                        itemHeight = 0.5;
                    }else{
                        itemLength = itemLength + 0.5;
                    }
                }
                return textPosition = {x:(-1*itemLength-0.8)+'em',y:(0.5*itemHeight)+'em'};
            default:
                return textPosition = {x:'0',y:'0'};
        }
    }

    getBackgroundStripElement(index){
        var backgroundStripElement = undefined;
        let barWidth = this.state.length/(this.state.data.length-1);
        if(this.backgroundConfig.stripType == 'line'){
            if(this.state.orientation == 'horizontal'){
                return backgroundStripElement = React.createElement('line',{className:'backgroundLine',stroke:'blue',y2:'-'+this.backgroundConfig.stripLength})
            }else{
                return backgroundStripElement = React.createElement('line',{className:'backgroundLine',stroke:'blue',x2:''+this.backgroundConfig.stripLength})
            }
        }else if(this.backgroundConfig.stripType == 'bar'){
            if(index < (this.state.data.length - 1)){
                if(this.state.orientation == 'horizontal'){
                    return backgroundStripElement = React.createElement('rect',{className:'backgroundBar',fill:(index%1)?'#ddd':'#ccc',width:''+barWidth,y:'-'+this.backgroundConfig.stripLength,height:''+this.backgroundConfig.stripLength})
                }else{
                    return backgroundStripElement = React.createElement('rect',{className:'backgroundBar',fill:(index%1)?'#ddd':'#ccc',y:'-'+barWidth,height:''+barWidth,width:''+this.backgroundConfig.stripLength})
                }
            }
        }
        return backgroundStripElement;
    }
    render() {
        return (
        <g className='axis-container' transform={this.props.transform}>
            <path d={this.getAxisPathStr()} stroke='#000'></path>
            {
                this.state.data.map((item,index)=>{
                    let textPosition = this.getTextPosition(item);
                    let textElement = React.createElement('text',{x:textPosition.x,y:textPosition.y},item); 
                    // let backgroundStripElement = this.getBackgroundStripElement(index);     
                    return React.createElement('g',{className:'coord',transform:this.getCoorTranslateStr(index,this.props.data.padding.begin,this.props.data.padding.end)},textElement);
                })
            }
        </g>)
    }
}

export default Axis