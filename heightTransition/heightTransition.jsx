import React from 'react';
import './heightTransition.scss';

class HeightTransition extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
            <div class="accordion"> 
                <a href="#" class="accordion-button">Hover for height animate</a>
                <div class="accordion-content">
                    <p>For animate the "height" of element with CSS Transitions you need use "max-height".</p>
                    <p>If use the "height: auto", the effect not works. Is necessary some value for the CSS create a CSS animate, and you can use "max-height" with a great value for emulate this effect.</p> 
                </div>
            </div>
        )
    }
}

export default HeightTransition