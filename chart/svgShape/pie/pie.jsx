import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './pie.scss';

class SvgPie extends React.Component {
    constructor(props){
        super(props); 
        this.data = [1,2,3,4,5]
        this.state = {
            pos:{
                x0:0,
                y0:0
            },
            angles:[],
            curAngle:{
                startAngle:0,
                endAngle:0
            },
            colors:['#98abc5','#8a89a6','#7b6888','#6b486b','#a05d56']
        }
        this.anglesInit();
    }

    anglesInit(){
        var dataSum = 0;
        this.data.map((item)=>{
            dataSum += item;
        })

        this.data.map((item,index)=>{
            this.state.angles[index] = item/dataSum*Math.PI*2;
        })
    }

    getPathStr(angle){
        this.state.curAngle.endAngle = this.state.curAngle.startAngle + angle;
        let startAngle = this.state.curAngle.startAngle; 
        let endAngle = this.state.curAngle.endAngle;
        let {x0,y0} =  this.state.pos//圆心
        let r = 50;//半径
        let x1 = x0+r*Math.sin(startAngle);
        let y1 = y0-r*Math.cos(startAngle);
        let x2 = x0+r*Math.sin(endAngle);
        let y2 = y0-r*Math.cos(endAngle);
        //这个标记表示角度大于半圆
            //此标记在绘制SBG弧形组件的时候需要
        let bigAngle=0;
        if(endAngle-startAngle>Math.PI) bigAngle=1;

        let d = "M "+x0+","+y0+ //从圆心开始
                " L "+x1+","+y1+   //画一条到(x1,y1)的线段
                " A "+r+","+r+     //再画一条半径为r的弧
                " 0 "+bigAngle+" 1 "+    // 弧的详细信息
                x2+","+y2+    //弧到(x2,y2)结束
                " Z";   //d当前路径到(x0,y0)结束

        this.state.curAngle.startAngle = this.state.curAngle.endAngle
        return d;
    }
    render() {
        return (
        <g className='pie-container' transform='translate(50,50)'>
        {
            this.state.angles.map((item,index)=>{
                let d = this.getPathStr(item);
                return React.createElement('path',{className:'arc',fill:''+this.state.colors[index],d:d})
            })
        } 
        </g>)
    }
}

SvgPie.propTypes = {

}
export default SvgPie