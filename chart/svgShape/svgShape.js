import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SvgRect from './rect/rect.js'
import SvgPie from './pie/pie.js'
import SvgCircle from './circle/circle.js'
import SvgText from './text/text.js'

class SvgShape{
    constructor(){
        this.svgRect = SvgRect
        this.svgPie = SvgPie
        this.svgText = SvgText
        this.svgCircle = SvgCircle
    }
    
    getRect(){
        return this.svgRect
    }

    getPie(){
        return this.svgPie
    }

    getCircle(){
        return this.svgCircle
    }

    getText(){
        return this.svgText
    }
}

SvgShape.propTypes = {

}
export default SvgShape