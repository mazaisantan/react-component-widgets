import React from 'react'
import './item.scss'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            folded : 'unfolded'
        }
        let {children,style} = this.props
        this.cursorStyle = {
            cursor: children?'pointer':'default'}
    }
    //折叠或展开item-content
    foldItemContent(){
        let {folded} = this.state
        let shape = this.node.getBoundingClientRect()
        if(folded == 'folded'){
            this.node.style.maxHeight = this.maxHeight//设置maxHeight使其展开
            this.setState({folded:'unfolded'})
        }else{
            this.node.style.maxHeight = 0 + "px"//设置maxHeight使其折叠
            this.setState({folded:'folded'})
        }
        this.setState({folded: folded =='folded' ? 'unfolded' : 'folded'})
    }
    componentDidMount(){
        this.maxHeight = this.node.getBoundingClientRect().height + 'px'
        this.node.style.maxHeight = this.maxHeight //初始化list-item-content 的max-heihght使其和高度一致
    }
    render() {
        let {foldItemContent,cursorStyle} = this
        let {title,children,style} = this.props
        let {folded} = this.state
        return (
            <div className={'list-item-container ' + folded}>
                <div className={'list-item-title'}  onClick={foldItemContent.bind(this)} style={{...style,...cursorStyle}}>
                    {title}
                    <span className={'list-item-icon ' + folded}>{children ? '>':null}</span>
                </div>
                <div className={'list-item-content'} ref = {(node)=>{this.node = node}}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Item