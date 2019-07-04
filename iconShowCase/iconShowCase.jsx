import React from 'react';
import './iconShowCase.scss';
import './icon/style.css';
import data from './data.json'

class IconShowCase extends React.Component {
    constructor(props){
        super(props); 
    }
    render() {
        return (
        <div className='material-icons-container'>
            {data.map((item)=>{
                return(
                    <div className="material-icon-container">
                        <i className='material-icons'>{item}</i>{/* 只需移植这一行就可以 */}
                        <div className="icon-caption">{item}</div>
                    </div>)
            })}
        </div>
        )
    }
}

export default IconShowCase