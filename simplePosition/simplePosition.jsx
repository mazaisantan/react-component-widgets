import React from 'react'
import './simplePosition.scss'

class SimplePosition extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-position">
            <span>视频节目</span>><span>视频节目</span>><span>最新韩剧</span>
        </div>)
    }
}

export default SimplePosition