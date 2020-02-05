import Time from "./Time";
import Calendar from "./Calendar";
import React, { useEffect, useState } from "react";
import './index.css'

function Home() {

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrolling, isScrolling] = useState(false);
  const [sIndex , setSIndex] = useState(0);

  useEffect(() => {
    let main = document.querySelector('.main'); //需要移动的DOM
    let sHeight = document.querySelector('.a').clientHeight;
//获取一屏的高度，判断该移动多少
    let sLength = document.querySelectorAll('.section').length;
//判断有几屏页面
    function scrollTo(i) {
      console.log(sIndex);
      //操作动画的函数
      isScrolling(true);
      main.style.top = -i * sHeight + 'px';
      setSIndex(i);
      setTimeout(function () {
        isScrolling(false);
      }, 1000);
    }

    window.onmousewheel = function (e) {
      //PC端的滚轮事件，嗯不兼容火狐
      if(!scrolling) {
        if(e.wheelDelta > 0) {
          //上一页
          if(sIndex === 0) {
            return;
          }
          scrollTo(sIndex -1);
        } else {
          //下一页
          if(sIndex === sLength - 1) {
            return;
          }
          scrollTo(sIndex + 1);
        }
      }
    };
    window.ontouchstart = function (e) {
      setStartX(e.changedTouches[0].pageX);
      setStartY(e.changedTouches[0].pageY)
    };
    window.ontouchmove = function (e) {
      if(!scrolling) {
        const endX = e.changedTouches[0].pageX;
        const endY = e.changedTouches[0].pageY;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
          console.log('往右滑动');
        } else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
          console.log('往左滑动');
        } else if(Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {

          if(sIndex === sLength - 1) {
            return;
          }
          console.log('向上滑动', sIndex, sLength);
          scrollTo(sIndex + 1);
        } else if(Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
          console.log('往下滑动', sIndex);
          if(sIndex === 0) {
            return;
          }
          scrollTo(sIndex -1);
        } else {
          // 没有滑动
        }
      }
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