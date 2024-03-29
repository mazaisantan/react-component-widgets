import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';
// import Axis from './axis/axis.jsx'
// import Background from './background/background.jsx'
// import Line from './linePath/linePath.jsx'
// import Bar from './bar/bar.jsx'
// import Pie from './pie/pie.jsx'
import D3SimpleAreaChart from './D3SimpleAreaChart/D3SimpleAreaChart.jsx'

const rawData =  [
    { day: "2015-01", quantity: 1240 },
    { day: "2015-02", quantity: 1905 },
    { day: "2015-03", quantity: 6232 },
    { day: "2015-04", quantity: 7545 },
    { day: "2015-05", quantity: 543 },
    { day: "2015-06", quantity: 443 },
    { day: "2015-07", quantity: 246 },
    { day: "2015-08", quantity: 5445 },
    { day: "2015-09", quantity: 1154 },
    { day: "2015-10", quantity: 448 },
    { day: "2015-11", quantity: 1545 },
    { day: "2015-12", quantity: 4585 },
    { day: "2016-01", quantity: 1520 },
    { day: "2016-02", quantity: 9015 },
    { day: "2016-03", quantity: 632 },
    { day: "2016-04", quantity: 745 },
    { day: "2016-05", quantity: 343 },
    { day: "2016-06", quantity: 6443 },
    { day: "2016-07", quantity: 546 },
    { day: "2016-08", quantity: 1545 },
    { day: "2016-09", quantity: 1354 },
    { day: "2016-10", quantity: 848 },
    { day: "2016-11", quantity: 2155 },
    { day: "2016-12", quantity: 4585 },
    { day: "2017-01", quantity: 1540 },
    { day: "2017-02", quantity: 905 },
    { day: "2017-03", quantity: 632 },
    { day: "2017-04", quantity: 745 },
    { day: "2017-05", quantity: 3543 },
    { day: "2017-06", quantity: 4443 },
    { day: "2017-07", quantity: 2546 },
    { day: "2017-08", quantity: 545 },
    { day: "2017-09", quantity: 154 },
    { day: "2017-10", quantity: 4848 },
    { day: "2017-11", quantity: 155 },
    { day: "2017-12", quantity: 4585 }
]; 

class SimpleAreaChart extends React.Component {
    render() {    
        return (
            <div className="simple-area-chart-container">
                <D3SimpleAreaChart rawData={rawData} />         
            </div>
        )
    }
}

export default SimpleAreaChart;