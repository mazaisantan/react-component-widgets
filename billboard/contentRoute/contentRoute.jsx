
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import './contentRoute.scss'


class ContentRoute extends React.Component {
  constructor(props){
      super(props); 
  }

  render() {
      return (
        <div className='content-container' style={this.props.style}>
          <div className='content-wrapper'>
          {
            Object.keys(this.props.components).map((item,index)=>{
              let curComponent = this.props.components[item];
              return <Route path={'/'+item} key={''+item} component={curComponent} /> 
            }) 
          }   
          </div>
        </div>            
      )
  }
}

export default ContentRoute