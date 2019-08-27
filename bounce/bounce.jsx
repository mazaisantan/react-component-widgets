import React from 'react'
import './bounce.scss'

class Bounce extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            animationName:["ball-shake","ball-drop","ball-bounce","button-hover"]
        }   
    }
    render() {
        let {animationName} = this.state
        return (
            <div className="bounce-container">
                {animationName.map((item)=>{
                    return <div className={item} key={item}></div>
                })}
            </div>)
    }
}

export default Bounce