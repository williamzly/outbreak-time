import React from "react";
import './index.scss';
import { NavLink } from "react-router-dom";

function Calendar() {

  const daysToNow = [];
  const beginDay = new Date('Dec 1, 2019');
  const toDay = new Date();
  const millisecondsInDay = 3600000 * 24;
  const monStrings = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  };
  // TODO 需要考虑时间增长之后，应该需要可以动态调整padding
  while ((toDay.getTime() - beginDay.getTime()) / millisecondsInDay >= 0) {
    daysToNow.push({
      dayInMon: beginDay.getDate(),
      dateStr: beginDay.getFullYear() + "-" + (beginDay.getMonth() + 1) + "-" + beginDay.getDate(),
      monStr: beginDay.getDate() === 1 && monStrings[beginDay.getMonth()]
    });
    beginDay.setTime(beginDay.getTime() + millisecondsInDay);
  }

  return (
      <div className='calendar'>
        <main className="cal-device">
          <header className="cal-header">
            <div className="cal-subheader"/>
            <div className="cal-bar">
              <div className="cal-button -left">
                <i className="fa fa-bars -calendar"/>
                <span className="fa"/>
              </div>
              <div className="cal-title">
                <div className="cal-heading -calendar">疫情日历</div>
                <div className="cal-heading -schedule"></div>
              </div>
              <div className="cal-button -right">
                <i className="fa fa-search"/>
              </div>
            </div>
          </header>
          <section className="cal-app">
            <header className="cal-week">
              <div className="cal-weekday">SUN</div>
              <div className="cal-weekday">MON</div>
              <div className="cal-weekday">TUE</div>
              <div className="cal-weekday">WED</div>
              <div className="cal-weekday">THU</div>
              <div className="cal-weekday">FRI</div>
              <div className="cal-weekday">SAT</div>
            </header>
            <div className="cal-scene -calendar">
              <div className="cal-month -october">
                {
                  daysToNow.map(day => (
                      <NavLink to={`/story/${day.dateStr}`} key={day.dateStr} className="cal-day">
                        {/*<a className="cal-day" >*/}
                          {day.monStr || day.dayInMon}
                        {/*</a>*/}
                      </NavLink>

                  ))
                }

              </div>
            </div>
          </section>
        </main>
      </div>
  )
}

export default Calendar;