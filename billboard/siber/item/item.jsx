import React from 'react'
import './item.scss'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            folded : true
        }
        let {children} = this.props
        this.cursorStyle = {
            cursor:children?'pointer':'default'
        }      
    }
    foldItemContent(){
        let {folded} = this.state
        this.setState({folded:folded ? false : true})
    }
    render() {
        let {foldItemContent,cursorStyle} = this
        let {title,children} = this.props
        let {folded} = this.state
        return (
            <div className='item-container'>
                <div className='item-title'  onClick={foldItemContent.bind(this)} style={cursorStyle}>
                    {title}
                </div>
                <div className='item-content'>
                    {folded ? null : children}
                </div>
            </div>
        )
    }
}

export default Item