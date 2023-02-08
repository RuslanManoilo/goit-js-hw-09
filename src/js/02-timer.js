import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
      if (currentDate < selectedDates[0]) {
        startButton.disabled = false;
      } else {
        return window.alert("Please choose a date in the future");
      }
    },
};

const calendarElem = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

// console.dir(calendarElem);
// console.log(startButton);

const fp = flatpickr(calendarElem, options);

const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const styleElem = document.querySelector('.timer')
const currentDate = new Date();
// console.dir(dataDays);
// console.log(dataHours);
// console.log(dataMinutes);
// console.log(dataSeconds);
// console.log(currentDate);

startButton.addEventListener('click', onStartTimer);
startButton.disabled = true;

function onStartTimer() {
    const remainingTimer = setInterval(() => {
        const currentTime = Date.now();
        let selectTime = new Date(calendarElem.value);
        const remainingTime = selectTime - currentTime;
        // console.log(remainingTime);

        function convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
          
            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);
            const minutes = Math.floor(((ms % day) % hour) / minute);
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);
          
            return { days, hours, minutes, seconds };
        };
        const { days, hours, minutes, seconds } = convertMs(remainingTime);
        console.log(convertMs(remainingTime));

        dataDays.textContent = `${days.toString().padStart(2, 0)}`;
        dataHours.textContent = `${hours.toString().padStart(2, 0)}`;
        dataMinutes.textContent = `${minutes.toString().padStart(2, 0)}`;
        dataSeconds.textContent = `${seconds.toString().padStart(2, 0)}`;

        if (remainingTime < 999) {
            clearInterval(remainingTimer);
            Notiflix.Notify.success("✅The moment has come!✅");
        };
    }, 1000);
};
  
// Style
styleElem.style.fontSize = '22px';
styleElem.style.display = 'flex';
styleElem.style.gap = '20px';
styleElem.style.marginTop = '50px';
styleElem.style.backgroundColor = 'gold';
styleElem.style.justifyContent = 'center';