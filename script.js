let days_element = document.querySelector('#days');
let hours_element = document.querySelector('#hours');
let minutes_element = document.querySelector('#minutes');
// let seconds_element = document.querySelector('#second');
const seconds_element = document.querySelector('#Second');

const newYear = '1 jan 2024';

function countdown(){
    const newYearDate = new Date (newYear);
    const currentDate = new Date();

    const totalSecond = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalSecond/3600/24);
    const hours = Math.floor(totalSecond/3600)%24;
    const minutes = Math.floor(totalSecond/60)%60;
    const seconds = Math.floor(totalSecond)%60;

    // console.log(days,hours,minutes,seconds);
    
    days_element.innerHTML = (days);
    hours_element.innerHTML = formatTime(hours);
    minutes_element.innerHTML = formatTime(minutes);
    seconds_element.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);
