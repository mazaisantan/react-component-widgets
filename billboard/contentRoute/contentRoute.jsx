
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './contentRoute.scss'


class ContentRoute extends React.Component {
  constructor(props){
      super(props); 
  }

  render() {
    let {style,components} = this.props
    return (
      <div className='content-container' style={style}>
        {
          Object.keys(components).map((item)=>{
            let curComponent = components[item]
            return <Route path={'/'+item} key={''+item} component={curComponent} /> 
          }) 
        }   
      </div>            
    )
  }
}

export default ContentRoute