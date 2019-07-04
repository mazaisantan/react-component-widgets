import React from 'react';
import './fadeInOverlay.scss';


export default class FadeInOverlay extends React.Component{
  constructor(props){
    super(props);  
  }


  render(){
    return(
    <div className="fadeInOverlay">
      <img src={require("./img_fjords_wide.jpg")} alt="Avatar"/>
      <div className="overlay">
          <div className="text">Hello World</div>
      </div>
    </div>
    );
  }
}
