import React from 'react'

class SvgText extends React.Component {

    constructor(props){
        super(props)
        let text = this.props.children || 'hello world'
        let {shape,offset,pos,margin} = this.props
        this.state = {
            shape:shape || {
                width:this.getTextWidth(text),
                height:this.getTextHeight(text)
            },
            offset:offset || {
                xRadio:0.5,
                yRadio:0.5
            },
            pos:pos || {
                x:0,
                y:150
            },
            margin:margin || {
                left:0,
                right:0,
                top:0,
                bottom:0
            }
        }
    }

    getTextWidth(text){
        let textWidth = 0
        for(let i=0;i<text.length;i++){
            if(text.match(/[\u4e00-\u9fa5]/g)){//中文字符
                textWidth++;
            }else{
                textWidth = textWidth + 0.5;
            }
        }
        return textWidth
    }

    getTextHeight(text){
        let textHeight = 0.5;
        for(let i=0;i<text.length;i++){
            if(text.match(/[\u4e00-\u9fa5]/g)){//中文字符
                textHeight = 1
            }else{
                
            }
        }
        return textHeight
    }

    getActualPos(){
        let {shape,offset,pos,margin} =  this.state
        let x = 0,y = 0;
        x = pos.x - offset.xRadio*shape.width + margin.left - margin.right
        y = pos.y - offset.yRadio*shape.height + margin.top - margin.bottom
        return {x,y}
    }

    componentDidMount(){
        let fontSize = document.defaultView.getComputedStyle(this.node).fontSize
        fontSize = parseInt(fontSize)
        let {shape} = this.state
        this.setState({
            shape:{
                width: shape.width*fontSize,
                height: shape.height*fontSize
            }
        })
    }
    render() {
        let pos = this.getActualPos()
        let text = this.props.children || 'hello world'
        return(
            <text {...pos} ref = {(node)=>{this.node = node}}>{text}</text>
        )
    }
}

export default SvgText