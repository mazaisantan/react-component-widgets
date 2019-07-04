import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './outline.scss';

class Outline extends React.Component {
    constructor(props){
        super(props);    
        this.state={
            itemBarTop:''
        }
    }

    mouseOverItemBar(evt){
        let currentClassName = evt.currentTarget.className
        currentClassName = currentClassName.match(/outline__item_i_[0-9]+/i)[0]
        switch(currentClassName){
            case 'outline__item_i_1':
            this.setState({itemBarTop:(0*35)+'px'})
            break
            case 'outline__item_i_2':
            this.setState({itemBarTop:(1*35)+'px'})
            break
            case 'outline__item_i_3':
            this.setState({itemBarTop:(2*35)+'px'})
            break
            case 'outline__item_i_4':
            this.setState({itemBarTop:(3*35)+'px'})
            break
            case 'outline__item_i_5':
            this.setState({itemBarTop:(4*35)+'px'})
            break
            default:
        }
    }
    
    mouseOutItemBar(evt){
        this.setState({itemBarTop:''})
    }
    render() {
        let {outlineActive} = this.props
        let {itemBartop} =  this.state
        let mouseOutItemBar = this.mouseOutItemBar.bind(this)
        let mouseOVerItemBar = this.mouseOverItemBar.bind(this)
        return (
        <div className={"outline "+outlineActive} onMouseOut={mouseOutItemBar}>
            <div className="outline__item_bar" style={{top:itemBartop}}></div>
            <a href="javascript:;" className="outline__item outline__item_i_1" onMouseOver={mouseOVerItemBar}>外观</a>
            <a href="javascript:;" className="outline__item outline__item_i_2" onMouseOver={mouseOVerItemBar}>配置</a>
            <a href="javascript:;" className="outline__item outline__item_i_3" onMouseOver={mouseOVerItemBar}>型号</a>
            <a href="javascript:;" className="outline__item outline__item_i_4" onMouseOver={mouseOVerItemBar}>说明</a>
            <a href="javascript:;" className="outline__item outline__item_i_5" onMouseOver={mouseOVerItemBar}>其他</a>
          </div>
        )
    }
}

Outline.propTypes = {

}
export default Outline