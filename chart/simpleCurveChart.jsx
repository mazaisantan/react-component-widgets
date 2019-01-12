import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';
// import Axis from './axis/axis.jsx'
// import Background from './background/background.jsx'
// import Line from './linePath/linePath.jsx'
// import Bar from './bar/bar.jsx'
// import Pie from './pie/pie.jsx'
import D3SimpleCurveChart from './D3SimpleCurveChart/D3SimpleCurveChart.jsx'

const data = [
    { time: '00:00', pm25: 75},
    { time: '01:00', pm25: 66},
    { time: '02:00', pm25: 43},
    { time: '03:00', pm25: 32},
    { time: '04:00', pm25: 20},
    { time: '05:00', pm25: 18},
    { time: '06:00', pm25: 16},
    { time: '07:00', pm25: 33},
    { time: '08:00', pm25: 53},
    { time: '09:00', pm25: 66},
    { time: '10:00', pm25: 55},
    { time: '11:00', pm25: 67},
    { time: '12:00', pm25: 99},
    { time: '13:00', pm25: 138},
    { time: '14:00', pm25: 110},
    { time: '15:00', pm25: 99},
    { time: '16:00', pm25: 119},
    { time: '17:00', pm25: 125},
    { time: '18:00', pm25: 173},
    { time: '19:00', pm25: 168},
    { time: '20:00', pm25: 162},
    { time: '21:00', pm25: 143},
    { time: '22:00', pm25: 132},
    { time: '23:00', pm25: 87}
]; 

class SimpleCurveChart extends React.Component {
    render() { 
        return (
            <div className="simple-curve-chart">
                <D3SimpleCurveChart data={data} />         
            </div>
        )
    }
}

export default SimpleCurveChart;