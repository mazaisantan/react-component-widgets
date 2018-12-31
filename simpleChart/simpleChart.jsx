import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './simpleChart.scss';

class SimpleChart extends React.Component {
    constructor(props){
        super(props);      
    }
    render() {
        return (
        <div className="simple-chart">
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Points</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
                </table>
        </div>)
    }
}

SimpleChart.propTypes = {

}
export default SimpleChart