import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './simpleList.scss';

class SimpleList extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-list">
            <div className="list-header">
                <ul>
                    <li>
                        <a className="title">魔幻/科幻</a>
                        <a className="score">评分</a>
                    </li>     
                </ul>
            </div>
            <div className="list-body">
                <ul>
                    <li>
                        <a className="number">1</a>
                        <a className="name">神盾局特工第五季</a>
                        <a className="score">9.4</a>
                    </li>   
                    <li>
                        <a className="number">2</a>
                        <a className="name">神盾局特工第四季</a>
                        <a className="score">9.2</a>
                    </li>                  
                </ul>
            </div>
            <div className="list-footer">

            </div>
        </div>)
    }
}

SimpleList.propTypes = {

}
export default SimpleList