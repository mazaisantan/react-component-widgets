import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './buy.scss';

class Buy extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <section class="buy">
            <a href="#" class="buy__button">立即购买</a>
        </section>
        )
    }
}

Buy.propTypes = {

}
export default Buy