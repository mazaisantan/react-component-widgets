import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class SvgText extends React.Component {

    constructor(props){
        super(props);
        let text = this.props.children ? this.props.children : 'x'
        this.state = {
            shape:{
                width:this.getTextWidth(text),
                height:this.getTextHeight(text)
            },
            offset:{
                xRadio:0,
                yRadio:0
            },
            pos:{
                x:0,
                y:0
            },
            margin:{
                left:0,
                right:0,
                top:0,
                bottom
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
            if(item.match(/[\u4e00-\u9fa5]/g)){//中文字符
                textHeight = 1
            }else{
                
            }
        }
        return textHeight
    }

    getActualPos(){
        let {shape,offset,pos} =  this.state
        let x = 0,y = 0;
        x = pos.x - offset.xRadio*shape.width + margin.left - margin.right
        y = pos.y - offset.yRadio*shape.height + margin.top - margin.bottom
        return {x,y}
    }

    render() {
        let pos = this.getActualPos()
        pos.x =  pos.x + 'em'
        pos.y = pos.y + 'em'
        return(
            <text {...pos} {...this.props}>this.props.children</text>
        )
    }
}

SvgCircle.PropTypes = {

}

export default SvgCircle