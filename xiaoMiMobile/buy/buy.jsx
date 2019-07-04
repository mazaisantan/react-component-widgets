import React from 'react'
import './buy.scss'

class Buy extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <section className="buy">
            <a href="#" className="buy__button">立即购买</a>
        </section>
        )
    }
}

export default Buy