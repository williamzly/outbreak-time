import Time from "./Time";
import Calendar from "./Calendar";
import React, { useEffect } from "react";
import './index.css'

function Home() {

  useEffect(() => {
    let sHeight = document.querySelector('.a').clientHeight;
//获取一屏的高度，判断该移动多少
    let sLength = document.querySelectorAll('.section').length;
//判断有几屏页面
    let sIndex = 0;//标记当前第几页
    let sScroll = false;//滚动时就不再触发事件，防止误点
    let main = document.querySelector('.main'); //需要移动的DOM
    window.onmousewheel = function (e) {
      //PC端的滚轮事件，嗯不兼容火狐
      if(!sScroll) {
        if(e.wheelDelta > 0) {
          //上一页
          if(sIndex === 0) {
            return;
          }
          sIndex--;
          scrollTo(sIndex);
        } else {
          //下一页
          if(sIndex === sLength - 1) {
            return;
          }
          sIndex++;
          scrollTo(sIndex);
        }
      }
    };

    function scrollTo(i) {
      //操作动画的函数
      sScroll = true;
      main.style.top = -i * sHeight + 'px';
      setTimeout(function () {
        sScroll = false
      }, 700);
    }

  });

  return (
      <div className="main-wrap">
        <div className="main">
          <div className="section a">
            <Time />
          </div>
          <div className="section b">
            <Calendar />
          </div>
          <div className="section c">
            <h1>Third Page</h1>
          </div>
        </div>
      </div>
  )
}

export default Home;