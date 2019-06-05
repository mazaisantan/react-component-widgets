import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './star.scss'
import PropTypes from 'prop-types';

class Star extends React.Component {
    constructor(props){
        super(props);
        let rate = this.props.rate || 0;
        if(rate > 5)rate = 5;
        let width = (rate / 5.0)*100;//width为点亮星星所占的比率
        this.state = {
            width
        }
    }
    render() {
        return (
        <div className="star-container">
            <div className="star-unselected">
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
            </div>
            <div className="star-selected" style={{width:this.state.width + '%'}}>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
            </div>
        </div>)
    }
}

Star.propTypes = {
    rate : PropTypes.number
}
export default Star