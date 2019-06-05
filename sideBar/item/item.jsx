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
    foldItemContent(){
        this.setState({folderState:this.state.folderState == 'unfolded'? 'folded':'unfolded'})
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
        return (
            <div className={'item-container'}>
                <div className='item-title'  onClick={this.foldItemContent.bind(this)} style={this.cursorStyle}>
                    {itemTitleWrapper(this.props.title,this.state.type,this.state.folderState)}
                </div>
                <div className={'item-content ' + this.state.folderState}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Item