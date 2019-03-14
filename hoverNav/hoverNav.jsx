import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './hoverNav.scss';

class HoverNav extends React.Component {
    constructor(props){
        super(props);  
        this.state={
            subMenuState:'fold'
        }    
    }

    foldMenu(){
        if(this.state.subMenuState == 'fold'){
            return
        }
        this.setState({subMenuState:'fold'})
    }

    unfoldMenu(){
        if(this.state.subMenuState == 'unfold'){
            return
        }
        this.setState({subMenuState:'unfold'})
    }

    render() {
        return (
            <div className="L hover-nav-container" onMouseMove={this.unfoldMenu.bind(this)} onMouseOut={this.foldMenu.bind(this)}>
                <div className='L menu-container paper--5'>
                    <div className="L menu">+</div>
                </div>
                <div className={'L sub-menu-container'}>
                    <div className={"L sub-menu "+this.state.subMenuState}>x</div>
                </div>
            </div>
        )
    }
}

HoverNav.propTypes = {

}
export default HoverNav