import React from 'react';
import ReactDOM from 'react-dom';
import './item.scss'

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            folded : 'unfolded'
        }
        this.cursorStyle = {cursor:this.props.children?'pointer':'default'}      
    }
    foldItemContent(){
        this.setState({folded:this.state.folded =='folded' ? 'unfolded' : 'folded'})
    }
    render() {
        return (
            <div className={'list-container'}>
                <div className={'list-title '+this.state.folded}  onClick={this.foldItemContent.bind(this)} style={this.cursorStyle}>
                    {this.props.title}
                    <span className='list-icon'>{this.props.children?'>':null}</span>
                </div>
                <div className={'list-content '+this.state.folded }>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Item