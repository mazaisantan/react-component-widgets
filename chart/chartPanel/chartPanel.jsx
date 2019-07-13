import React from 'react'
import './chartPanel.scss'
import Axis from '../axis/axis.jsx'
import SvgRect from '../svgShape/rect/rect.js'

class ChartPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            margin:[100,100]//left、top边距
        } 
        this.scale = {
            min: Math.min(...this.props.yAxis.data),
            max: Math.max(...this.props.yAxis.data)
        }   
    }
    x(item){
        let {xAxis} = this.props
        let index = xAxis.data.indexOf(item)
        let translateDistance = index*((xAxis.length-xAxis.padding.begin-xAxis.padding.end)/(xAxis.data.length-1));
        let x = translateDistance + xAxis.padding.begin
        return x
    }
    height(item){
        let {min,max} = this.scale
        let {yAxis} = this.props
        //取得item值y轴的映射值
        let height = (item - min)*yAxis.length/(max-min)
        return height
    }
    y(item){
        let {yAxis} = this.props
        //取得y坐标值,以左上角为起点
        let y = yAxis.length - this.height(item)
        return y
    }
    render() {
        let {x,y,height} = this
        x= x.bind(this)
        y= y.bind(this)
        height= height.bind(this)
        let {xAxis,yAxis,data} = this.props
        let {margin} = this.state
        
        return (
        <g className='chartPanel-container' transform={'translate('+margin[0]+','+margin[1]+')'}>
            <Axis data={xAxis} transform={'translate(0,'+yAxis.length+')'}/>
            <Axis data={yAxis}/>
            
            {
                data.map((item)=>{
                    let offset = {
                        xRadio: 0.5,
                        yRadio:1
                    }
                    let pos = {
                        x: x(item.x),
                        y: y(0)
                    }
                    let shape = {
                        width: 20,
                        height: height(item.y)
                    }
                    return <SvgRect pos={pos} shape={shape} offset={offset}/>
                })
            } 
        </g>)
    }
}

export default ChartPanel