import Notiflix from 'notiflix';


const formElem = document.querySelector('.form');

formElem.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const amountEl = Number(event.currentTarget.elements[2].value);
  const stepDelay = Number(event.currentTarget.elements[1].value);
  const firstDelay = Number(event.currentTarget.elements[0].value);

  for (let i = 1; i <= amountEl; i += 1) {
    let position = i;
    let delay = firstDelay + stepDelay * (position - 1);

    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };

  event.currentTarget.reset();
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  })
    return promise;
};
