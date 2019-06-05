import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './colorGradient.scss';

class ColorGradient extends React.Component {
    constructor(props){
        super(props);     
        this.colors = {
            theme1:{
                from:'#FEB692',
                to:'#EA5455'
            },
            theme2:{
                from:'#CE9FFC',
                to:'#7367F0'
            },
            theme3:{
                from:'#F6CEEC',
                to:'#D939CD'
            },
            theme4:{
                from:'#52E5E7',
                to:'#130CB7'
            },
            theme5:{
                from:'#90F7EC',
                to:'#32CCBC'
            },
            theme6:{
                from:'#F761A1',
                to:'#8C1BAB'
            },
            theme7:{
                from:'#43CBFF',
                to:'#970BCC'
            },
            theme8:{
                from:'#5EFCE8',
                to:'#736EFE'
            },
            theme9:{
                from:'#FFF5C3',
                to:'#9452A5'
            },
            theme10:{
                from:'#f4d03f',
                to:'#16a085'
            },
            theme11:{
                from:'#cbb4d4',
                to:'#20002c'
            },
            theme12:{
                from:'#dbd5a4',
                to:'#659173'
            },
            theme13:{
                from:'#ffc500',
                to:'#c21500'
            },
            theme14:{
                from:'#f15f79',
                to:'#b24592'
            },
            theme15:{
                from:'#ff512f',
                to:'#dd2476'
            }
        }
    }
    render() {
        let colorsArray =  Object.entries(this.colors);
        return (
        <div className="color-gradient-container">
            {
                colorsArray.map((item)=>{
                    return (
                    <div className='color-gradient-group' style={{background: 'linear-gradient(to right bottom,'+item[1].from+','+item[1].to+')'}}>
                    </div>)
                })
            }
        </div>)
    }
}

ColorGradient.propTypes = {

}
export default ColorGradient 

// style={{background:'linear-gradient:(45deg,'+item[1].from+','+item[1].to+')'}}