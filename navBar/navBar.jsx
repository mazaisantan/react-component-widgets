import React from 'react'
import './navBar.scss'

class NavBar extends React.Component {
    constructor(props){
        super(props);  
    }
    render() {
        return (
        <div className="navbar">
            <ul className="nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><input type="text"/></li>
            </ul>
        </div>
        )
    }
}

export default NavBar