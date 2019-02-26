import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './chartPanel.scss';
import Axis from '../axis/axis.jsx'

class ChartPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            margin:[100,100]//left、top边距
        } 
        this.scale = {
            min:Math.min(...this.props.yAxis.data),
            max:Math.max(...this.props.yAxis.data)
        }   
        this.x.bind(this)
        this.y.bind(this)
    }
    x(item){
        let index = this.props.xAxis.indexOf(item)
        let translateDistance = index*((this.props.xAxis.length-this.props.xAxis.paddingBegin-this.props.xAxis.paddingEnd)/(this.props.xAxis.data.length-1));
        var coordTranslateStr = undefined;
        coordTranslateStr = 'translate(' + (translateDistance+paddingBegin) +',0)';
        return coordTranslateStr
    }
    y(item,length,paddingBegin,paddingEnd){
        let y = paddingBegin+(item - this.scale.min)*(length-paddingBegin-paddingEnd)/(this.scale.max-this.scale.min)
        return y
    }
    render() {
        return (
        <g className='chartPanel-container' transform={'translate('+this.state.margin[0]+','+this.state.margin[1]+')'}>
            <Axis data={this.props.xAxis} transform={'translate(0,'+this.props.yAxis.length+')'}/>
            <Axis data={this.props.yAxis}/>
            {
                this.props.data.map((item)=>{
                    return <rect className='bar' fill='orange' width='5px' height={this.y(item.y,this.props.yAxis.length,this.props.yAxis.padding.begin,this.props.yAxis.padding.end)}/>
                })
            } 
        </g>)
    }
}

ChartPanel.propTypes = {

}
export default ChartPanel