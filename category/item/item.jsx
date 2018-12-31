import React from 'react';
import ReactDOM from 'react-dom';
import './item.scss'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            folded : false
        }
        this.cursorStyle = {cursor:this.props.children?'pointer':'default'}      
    }
    foldItemContent(){
        this.setState({folded:this.state.folded ? false : true})
    }
    render() {
        return (
            <div className='item-container'>
                <div className='item-title'  onClick={this.foldItemContent.bind(this)} style={this.cursorStyle}>
                    {this.props.title}
                </div>
                <div className='item-content'>
                    {this.state.folded ? null : this.props.children}
                </div>
            </div>
        )
    }
}

export default Item