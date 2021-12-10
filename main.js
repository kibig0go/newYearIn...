const days_holder = document.getElementById('day');
const hours_holder = document.getElementById('hour');
const minutes_holder = document.getElementById('minute');
const seconds_holder = document.getElementById('second');

const newYear = '1 january 2022';
const newYearsDate = new Date(newYear);

function countDown() {
    let currentDate = new Date();
    
    let remainingTime = newYearsDate - currentDate;

    let some = (remainingTime/1000) / 3600 / 24;
    days = Math.floor(some);
    some = (remainingTime/1000) / 3600 % 24;
    hours = Math.floor(some);
    some = (remainingTime/1000) / 60 % 60;
    minutes = Math.floor(some);
    some = (remainingTime/1000) % 60;
    seconds = Math.floor(some);
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);
    days_holder.innerText = days;
    hours_holder.innerText = hours;
    minutes_holder.innerText = minutes;
    seconds_holder.innerText = seconds;
}

setInterval(countDown, 1000);