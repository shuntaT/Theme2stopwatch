'use strict';

{
let count = document.getElementById('count');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp() {
  let d = new Date(Date.now() - startTime + elapsedTime);
  let m = String(d.getMinutes()).padStart(1, '0');
  let s = String(d.getSeconds()).padStart(1, '0');
  let ms = String(d.getMilliseconds()).padStart(3, '0');
  
  let tens = Math.floor(s / 10);
  let sec = Math.floor(s % 10);
  let mss = ms.slice(0,1);


  count.textContent = `${m}:${tens}:${sec}:${mss}`;

  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
}

function setButtonStateInitial() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

function setButtonStateRunning() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = ture;
}

function setButtonStateStoped() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

setButtonStateInitial();



  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
    setButtonStateRunning();
  });

  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    setButtonStateStoped();
  });

  reset.addEventListener('click', () => {
   count.textContent = '0:0:0:0';
   elapsedTime = 0;
   setButtonStateInitial();
  });
}
