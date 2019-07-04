import React from 'react';
import './colors.scss';

class Colors extends React.Component {
    constructor(props){
        super(props);     
        this.colorOpacitys = [1,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1] 
        this.colors = {
            red:'183,28,28',
            pink:'136,14,79',
            purple:'74,20,140',
            teal:'00,77,64',
            grey:'33,33,33',
            green:'27,94,32',
            lightBlue:'01,87,155',
            cyan:'00,96,100',
            yellow:'245,127,23',
            brown:'62,39,35',
            blueGrey:'38,50,56',
            orange:'230,81,00',
            indigo:'26,35,126'
        }
    }
    render() {
        let colorsArray =  Object.entries(this.colors);
        return (
        <div className="colors-container">
            {
                colorsArray.map((item)=>{
                    return (
                    <div className='color-group'>
                        <div style={{backgroundColor:'rgb('+item[1]+')',color:'white'}}>{item[0]}</div>
                        {
                         this.colorOpacitys.map((subItem)=>{
                             return (<div style={{backgroundColor:'rgba('+item[1]+','+subItem+')',userSelect:'text'}}>{'rgba('+item[1]+','+subItem+')'}</div>)
                         })
                        }
                    </div>)
                })
            }
        </div>)
    }
}

export default Colors
