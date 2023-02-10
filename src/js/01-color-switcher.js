const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
// console.log(startButton);
// console.log(stopButton);
// console.dir(bodyEl);

startButton.addEventListener('click', onStartClick);
stopButton.addEventListener('click', onStopClick);

let timerColor = null;
stopButton.disabled = true;

function onStartClick(event) {
    // console.dir(event.currentTarget);   
    timerColor = setInterval(() => {
        bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }, 1000);

    event.currentTarget.disabled = true;
    stopButton.disabled = false;
};

function onStopClick() {
    clearInterval(timerColor);
    // console.log(`Stop!`);
    startButton.disabled = false;
    stopButton.disabled = true;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};