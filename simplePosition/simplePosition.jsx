import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './simplePosition.scss';

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

SimplePosition.propTypes = {

}
export default SimplePosition