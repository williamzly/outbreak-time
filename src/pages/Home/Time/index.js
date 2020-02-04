import React, { useEffect, useState } from 'react';

import './index.css';
import CountUp from "./CountUp";
import CLock from "./Clock";


function Time() {

  const [dayNum, setDayNum] = useState(0);
  const [hourNum, setHourNum] = useState(0);
  const [minNum, setMinNum] = useState(0);
  const [secNum, setSecNum] = useState(0);

  useEffect(() => {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Dec 1, 2019 12:00:00').getTime();
    const x = setInterval(function () {

      let now = new Date().getTime();
      const distance = now - countDown;

      setDayNum(Math.floor(distance / (day)));
      setHourNum(Math.floor((distance % (day)) / (hour)));
      setMinNum(Math.floor((distance % (hour)) / (minute)));
      setSecNum(Math.floor((distance % (minute)) / (second)));

    }, second);
    return () => {
      clearInterval(x);
    }
  });

  return (
      <div className='time'>
        <CountUp day={dayNum} hour={hourNum}/>
        <CLock min={minNum} sec={secNum}/>
      </div>
  )
}

export default Time;