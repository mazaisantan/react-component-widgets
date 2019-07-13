import React from 'react'
import './sector.scss'

class SvgSector extends React.Component {
    constructor(props){
        super(props);
        let {shape,offset,pos} = this.props

        this.state = {
            pos:{
                x:0,
                y:300,
                ...pos
            },
            offset:{
                xRadio:0,
                yRadio:0,
                cx:0,
                cy:0,
                ...offset
            },
            shape:{
                r:50,
                startAngle:0,
                angle:80,
                ...shape
            }
        }
    }

    getPathStr(){
        let {x0,y0} = this.getActualPos()//圆心
        let {offest,shape,margin} = this.state
        let startAngle = shape.startAngle/180*Math.PI
        let endAngle = (shape.startAngle + shape.angle)/180*Math.PI
        let r = shape.r//半径
        let x1 = x0+r*Math.sin(startAngle)
        let y1 = y0-r*Math.cos(startAngle)
        let x2 = x0+r*Math.sin(endAngle)
        let y2 = y0-r*Math.cos(endAngle)
        //这个标记表示角度大于半圆
        //此标记在绘制SBG弧形组件的时候需要
        let bigAngle  = 0
        console.log(Math.PI)
        if(endAngle - startAngle > Math.PI) bigAngle = 1//sector角度是否大于180度

        let d = "M "+x0+","+y0+ //从圆心开始
                " L "+x1+","+y1+   //画一条到(x1,y1)的线段
                " A "+r+","+r+     //再画一条半径为r的弧
                " 0 "+bigAngle+" 1 "+    // 弧的详细信息
                x2+","+y2+    //弧到(x2,y2)结束
                " Z";   //d当前路径到(x0,y0)结束
        return d
    }

    getActualPos(){
        let {shape,offset,pos,margin} =  this.state
        let x0 = pos.x - offset.xRadio*2*shape.r + offset.cx + shape.r
        let y0 = pos.y - offset.yRadio*2*shape.r  + offset.cy + shape.r
        return {x0,y0}
    }

    render() {
        let d = this.getPathStr()
        return (
            <path className = 'arc' fill = '#98abc5' d = {d}/>
        )
    }
}

export default SvgSector