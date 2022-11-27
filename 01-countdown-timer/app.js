const newYears = '28 Dec 2022'

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const diff = new Date(newYearsDate - currentDate);
    
    // const seconds = diff.getSeconds();
    // const minutes = diff.getMinutes();
    // const hours = diff.getHours();
    // const days = diff.getDate();

    const days2 = Math.floor(diff / 1000 / 3600 / 24 );
    const hours2 = Math.floor(diff / 1000 / 3600 % 24);
    const minutes2 = Math.floor(diff / 1000 / 60 % 60);
    const seconds2 = Math.floor(diff / 1000 % 60);

    hoursEl.innerHTML = hours2
    daysEl.innerHTML = days2
    minutesEl.innerHTML = minutes2
    secondsEl.innerHTML = seconds2

}

countdown();

setInterval(countdown, 1000);

