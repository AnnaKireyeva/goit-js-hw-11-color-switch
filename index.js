const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click', changeBackgroundColor);
refs.stop.addEventListener('click', stopChangeBackgroundColor);
let intervalId = null;

function changeBackgroundColor() {
  refs.start.disabled = true;
  intervalId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);
}

function stopChangeBackgroundColor() {
  refs.start.disabled = false;
  clearInterval(intervalId);
}
