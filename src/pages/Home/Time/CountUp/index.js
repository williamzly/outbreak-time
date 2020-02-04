import React from "react";
import './index.css'

function CountUp(props) {
  const {day, hour} = props;
  return (
      <div className='count-up'>
        <div className="container">
          <h1>疫情已经持续了:</h1>
          <ul style={{margin: 0, padding: 0}}>
            <li><span id="days">{day}</span>days</li>
            <li><span id="hours">{hour}</span>Hours</li>
          </ul>
        </div>
      </div>
  )
}

export default CountUp;