// const imgs = document.getElementById("images");
const imgs = document.querySelectorAll("#images img");

const yearInput = document.getElementById('year-input');
const yearLabel = document.getElementById('year-label');
const monthInput = document.getElementById('month-input');
const monthLabel = document.getElementById('month-label');
const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imgEl = document.querySelector('.image-container');

let currentImg = 1;
prevEl.addEventListener("click", () => {
    currentImg--;
    updateImg();
})

nextEl.addEventListener("click", () => {
    currentImg++;
    updateImg();
})

function updateImg() {
    if (currentImg > imgs.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length;
    }
    imgEl.style.transform = `translateX(-${ (currentImg -1) * 700}px)`
}

setInterval(() => {
    currentImg++
    updateImg()
},3000)


yearInput.addEventListener('input', () => {
  yearLabel.textContent = `${yearInput.value} 年`;
});

monthInput.addEventListener('input', () => {
  monthLabel.textContent = `${months[monthInput.value - 1]} 月`;
});


