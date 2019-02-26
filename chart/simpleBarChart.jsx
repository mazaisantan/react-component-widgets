import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ChartPanel from './chartPanel/chartPanel.jsx'
import Bar from './bar/bar.jsx'

class SimpleBarChart extends React.Component {
    constructor(props){
        super(props);    
        this.xAxisData = {
            orientation:'horizontal',//horizontal/vertical
            data:['我的','xxxxxx'],  
            length:300,
            padding:{
                begin:25,
                end:5
            }
        }
        this.yAxisData = {
            orientation:'vertical',//horizontal/vertical
            data:[0,10,30,40,50],
            length:300,
            padding:{
                begin:25,
                end:5
            }
        }
        this.data = [
            {
                x:'我的',
                y:20
            },
            {
                x:'xxxxxx',
                y:50
            },
        ]
    }

    render() {
        return (
        <svg className='simpleBarChart-container' width='1000px' height='1000px'>
            <ChartPanel xAxis={this.xAxisData} yAxis={this.yAxisData} data={this.data}>
            </ChartPanel>
        </svg>)
    }
}

SimpleBarChart.propTypes = {

}
export default SimpleBarChart