import React from 'react';
import './datePicker.scss';

import {DatePicker,TimePicker} from 'react-md'

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