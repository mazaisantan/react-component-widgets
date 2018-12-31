import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './axis.scss';

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
        if(this.state.data == undefined || this.state.data.length == 0 || this.state.data.length == 1){
            return false;
        }else{
            return true;
        }
    }

    getAxisPathStr(){
        var axisPathStr = undefined;
        switch(this.state.orientation){
            case 'horizontal':
                return (axisPathStr = 'M0,0H' + this.state.length);
                break;
            case 'vertical':
                return (axisPathStr = 'M0,0V' + this.state.length);
                break;
            default:
                return (axisPathStr = 'M0,0');
                break;
        }
    }

    getCoorTranslateStr(index){
        let translateDistance = index*(this.state.length/(this.state.data.length-1));
        var coordTranslateStr = undefined;
        switch(this.state.orientation){
            case 'horizontal':
                return coordTranslateStr = 'translate(' + translateDistance +',0)';
                break;
            case 'vertical':
                return coordTranslateStr = 'translate(0,' + (this.state.length - translateDistance) +')';
                break;
            default:
                return coordTranslateStr = 'translate(0,0)';
                break;
        }
    }

    getTextPosition(item){   
        var textPosition = {x:'0',y:'0'};
        let itemLength = 0;
        switch(this.state.orientation){
            case 'horizontal':
                itemLength = 0;
                for(let i=0;i<item.length;i++){
                    if(item.match(/[\u4e00-\u9fa5]/g)){//中文字符
                        itemLength++;
                    }else{
                        itemLength = itemLength + 0.5;
                    }
                }
                return textPosition = {x:((-0.5*itemLength) + 'em'),y:'1em'};
                break;
            case 'vertical':
                itemLength = 0.5;
                for(let i=0;i<item.length;i++){
                    if(item.match(/[\u4e00-\u9fa5]/g)){//中文字符
                        itemLength = 1;
                    }else{
  
                    }
                }
                return textPosition = {x:'-1em',y:(-(0.5*itemLength)+'em')};
                break;
            default:
                return textPosition = {x:'0',y:'0'};
                break;
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
        <g className='axis-container'>
            <path d={this.getAxisPathStr()} stroke='#000'></path>
            {
                this.state.data.map((item,index)=>{
                    let textPosition = this.getTextPosition(item);
                    let textElement = React.createElement('text',{x:textPosition.x,y:textPosition.y},item); 
                    let backgroundStripElement = this.getBackgroundStripElement(index);     
                    return React.createElement('g',{className:'coord',transform:this.getCoorTranslateStr(index)},textElement,backgroundStripElement);
                })
            }
        </g>)
    }
}

Axis.propTypes = {

}
export default Axis