const newYears = '28 Dec 2022'
const initTime = '28 Dec 2020'

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const counterEl = document.getElementById('days-matter')

function countdown() {
    const newYearsDate = new Date(newYears);
    const initDateTime = new Date(initTime)
    const currentDate = new Date();
    
    const diff = new Date(newYearsDate - currentDate);

    const days2 = Math.floor(diff / 1000 / 3600 / 24 );
    const hours2 = Math.floor(diff / 1000 / 3600 % 24);
    const minutes2 = Math.floor(diff / 1000 / 60 % 60);
    const seconds2 = Math.floor(diff / 1000 % 60);

    hoursEl.innerHTML = hours2
    daysEl.innerHTML = days2
    minutesEl.innerHTML = minutes2
    secondsEl.innerHTML = seconds2
    daysMatter = Math.floor(new Date(currentDate - initDateTime) / 1000 / 3600 / 24);
    counterEl.innerHTML = `💞在一起${daysMatter}天💞`

}
countdown();

setInterval(countdown, 1000);

