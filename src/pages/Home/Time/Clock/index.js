import React from "react";
import './index.scss'

function CLock(props) {
  const {min, sec} = props;
  return (
      <div className="clock">
        <div className="timer-group">
          <div className="timer hour">
            <div className="hand"><span/></div>
            <div className="hand"><span/></div>
          </div>
          <div className="timer minute">
            <div className="hand"><span/></div>
            <div className="hand"><span></span></div>
          </div>
          <div className="timer second">
            <div className="hand"><span/></div>
            <div className="hand"><span/></div>
          </div>
          <div className="face">
            <span>{min > 9 ? min : '0'+min}:{sec > 9? sec : '0' + sec}</span>
            <h2>武汉加油</h2>
            <h2>我们等你</h2>
          </div>
        </div>
      </div>
  )
}

export default CLock;