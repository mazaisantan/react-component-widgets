import React from 'react';
import ReactDOM from 'react-dom';
import './item.scss'




class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            type:this.props.children?'folder':'content',
            folderState:'unfolded'
        }
        this.cursorStyle = {cursor:this.props.children?'pointer':'default'}      
    }

    componentDidMount(){
        this.height = this.node.getBoundingClientRect().height
    }

    foldItemContent(){
        let {folderState} = this.state
        let style = this.node.style
        if(folderState == 'unfolded'){
            this.setState({folderState:'folded'})
            style.marginTop = (-this.height)+'px'
            //如果使用relative布局，会有占位，无法收缩
            //但是用margin重叠时无法遮挡
        }else{
            this.setState({folderState:'unfolded'})
            style.marginTop = 0
        }
    }

    render() {
        {
            var itemTitleWrapper= (title,type,folderState)=>{
                return (
                    <div className='title-wrapper'>
                        <span>
                            {title}
                        </span>
                        {
                            type == 'folder'?
                            <span className={'icon-triangle-right ' + folderState}>
                            </span>:null
                        }      
                    </div>
                )
            }
        }
        let {type,folderState} = this.state
        let {title} = this.props
        return (
            <div className={'item-container'}>
                <div className='item-title'  onClick={this.foldItemContent.bind(this)} style={this.cursorStyle}>
                    {itemTitleWrapper(title,type,folderState)}
                </div>
                <div className={'item-content ' + folderState}>
                    <div ref={(node)=>{this.node = node}}>
                         {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Item