import React from 'react';
import './cubicBezier.scss';

class cubicBezier extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shape:[236,206],//0,1分别为width，height
            data:[
                [0,200,190,10],//四个点，0，1，3，4分别为x1,y1,x2,y2
                [0,100,100,10],//四个点，0，1，3，4分别为x1,y1,x2,y2
                [0,100,100,100],//四个点，0，1，3，4分别为x1,y1,x2,y2
                [0,100,200,100],//四个点，0，1，3，4分别为x1,y1,x2,y2
            ],
            radio:[
                [0.2,0.2,0,1],//四个点，0，1，3，4分别为x1,y1,x2,y2//x1,y1为起始点，x2,y2为结束点
                [0.1,0,0.1,1],//四个点，0，1，3，4分别为x1,y1,x2,y2//x1,y1为起始点，x2,y2为结束点
                [0,0,1,1],//四个点，0，1，3，4分别为x1,y1,x2,y2//x1,y1为起始点，x2,y2为结束点
                [0.25,0,1,1],//四个点，0，1，3，4分别为x1,y1,x2,y2//x1,y1为起始点，x2,y2为结束点
            ]
        }     
    }

    //记录鼠标按下，鼠标移动，鼠标松开事件
    //i为第i个数组，j为数组的下标
    mouseEvent(i,j,evt){
        //触发的事件类型
        let evtType = evt.type
        let {shape,data} = this.state
        switch(evtType){
            case 'mousedown': {
                this.mouseDown = true
                let targetData = data[i]
                this.mouseDownPos = {
                    mouseX: evt.clientX || evt.x,//点击位置距离当前body可视区域的x，y坐标
                    mouseY: evt.clientY || evt.y
                }
                this.elemPos = {
                    circleX: targetData[j],
                    circleY: targetData[j+1]
                }
                this.index = {
                    i: i,
                    j: j
                }
                document.addEventListener("mouseup", ()=>{
                    this.mouseDown = false
                })
                break
            }
            case 'mousemove': {
                if(this.mouseDown){
                    let {mouseX,mouseY} = this.mouseDownPos
                    let {circleX,circleY} = this.elemPos
                    let {i,j} = this.index
                    let targetData = data[i]
                    //移动的距离
                    let {cx,cy} = {
                        cx: evt.clientX - mouseX,
                        cy: evt.clientY - mouseY
                    }
                    //最终达到的位置
                    let {curX,curY} = {
                        curX: circleX + cx,
                        curY: circleY + cy
                    }
                    console.log(curX)
                    console.log(curY)
                    if(curX > shape[0] || curY > shape[1] || curX < 0 || curY < 0){
                        curX = curX > shape[0] ? shape[0] : curX
                        curY = curY > shape[1] ? shape[1] : curY
                        curX = curX < 0 ? 0 : curX
                        curY = curY < 0 ? 0 : curY
                    }
                    targetData.splice(j,1,curX)
                    targetData.splice(j+1,1,curY)
                    this.setState({})   
                }
                break
            }
            default:
                break
        }
    }

    render() {
        let {shape,data,radio} = this.state
        return (
            <div className="cubic-bezier-container">{
                data.map((item,i)=>{
                    let d = 'M '+radio[i][0]*shape[0]+' '+radio[i][1]*shape[1]+' C '+item[0]+' '+item[1]+','+item[2]+' '+item[3]+', '+radio[i][2]*shape[0]+' '+radio[i][3]*shape[1]
                    return (
                        <div style={{display:'inline-block'}}>
                            <svg width={shape[0]} height={shape[1]}
                                onMouseMove={this.mouseEvent.bind(this,i,0)}>
                                <text x="10" y="10"  fill="red">{'x1:'+item[0]+' y1:'+item[1]+'  x2:'+item[2]+' y2:'+item[3]}</text>
                                <text x="10" y="30" fill="red">{'width:'+shape[0]+' height:'+shape[1]}</text>
                                <path d={d} stroke='white' strokeWidth='2' stroke="black" fill='transparent'/>
                                <circle className='cursor' cx={item[0]} cy={item[1]} r="5" stroke="black"
                                    onMouseDown={this.mouseEvent.bind(this,i,0)}/>
                                <circle className='cursor' cx={item[2]} cy={item[3]} r="5" stroke="black"
                                    onMouseDown={this.mouseEvent.bind(this,i,2)}/>
                            </svg>
                        </div>
                    )
                    
                })
            } 
            </div>  
        )
    }
}

export default cubicBezier