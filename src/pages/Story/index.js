import React from "react";
import './index.scss'

function Story(props) {
  const dayStr = props.match.params.id;
  return (
      <div className='story'>
        <main className="cal-device">
          <header className="cal-header">
            <div className="cal-subheader"/>
            <div className="cal-bar">
              <div className="cal-button -left">
                <span onClick={() => props.history.goBack()} className="fa fa-chevron-left -schedule"/>
              </div>
              <div className="cal-title">
                <div className="cal-heading -calendar">{dayStr}</div>
              </div>
              <div className="cal-button -right">
              </div>
            </div>
          </header>
          <section  className="cal-app">
            <div className="cal-scene -schedule">
              <div className="cal-item">
                <div className="cal-time"><span>08:00</span></div>
                <div className="cal-task">
                  <p>The United Kingdom directed its citizens to leave China if possible. Foreign Secretary Dominic Raab said, "We now advise British Nationals in China to leave the country if they can, to minimise their risk of exposure to the virus.”</p>
                </div>
              </div>
              <div className="cal-item">
                <div className="cal-time"><span>12:00</span></div>
                <div className="cal-task">
                  <p>Cathay Pacific Airways, the flag carrier of Hong Kong, announces that it is ceasing 90% of its flights to mainland China</p>
                </div>
              </div>
              <div className="cal-item">
                <div className="cal-time"><span>13:00</span></div>
                <div className="cal-task">
                  <p>Li Lanjuan, an epidemiologist with China's National Health Commission, stated to CCTV that "this period is the peak of the coronavirus outbreak". Li also mencioned that the higher number of patients plus the shortage of medical supllies has lead to a higher mortality rate in Hubei province comparing to the rest of the China.</p>
                </div>
              </div><div className="cal-item">
                <div className="cal-time"><span>08:00</span></div>
                <div className="cal-task">
                  <p>The United Kingdom directed its citizens to leave China if possible. Foreign Secretary Dominic Raab said, "We now advise British Nationals in China to leave the country if they can, to minimise their risk of exposure to the virus.”</p>
                </div>
              </div>
              <div className="cal-item">
                <div className="cal-time"><span>12:00</span></div>
                <div className="cal-task">
                  <p>Cathay Pacific Airways, the flag carrier of Hong Kong, announces that it is ceasing 90% of its flights to mainland China</p>
                </div>
              </div>
              <div className="cal-item">
                <div className="cal-time"><span>13:00</span></div>
                <div className="cal-task">
                  <p>Li Lanjuan, an epidemiologist with China's National Health Commission, stated to CCTV that "this period is the peak of the coronavirus outbreak". Li also mencioned that the higher number of patients plus the shortage of medical supllies has lead to a higher mortality rate in Hubei province comparing to the rest of the China.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

  )
}

export default Story;