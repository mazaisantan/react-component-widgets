import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './datePicker.scss';

import {DatePicker,TimePicker} from 'react-md'

// class DatePicker extends React.Component {
//     constructor(props){
//         super(props);      
//     }
//     render() {
//         return (

//         )
//     }
// }

// DatePicker.propTypes = {

// }
// export default DatePicker

const OrientationExamples = () => (
    <div className="md-grid">
      <DatePicker
        id="appointment-date-auto"
        label="Select an appointment date"
        className="md-cell"
      />
      <br/>
      <DatePicker
        id="appointment-date-portrait"
        label="Portrait mode"
        className="md-cell"
        displayMode="portrait"
      />
      <br/>
      <DatePicker
        id="appointment-date-landscape"
        label="Landscape mode"
        className="md-cell"
        displayMode="landscape"
      />
    </div>
);

export default OrientationExamples