let link = "https://api.adviceslip.com/advice";

document.addEventListener('DOMContentLoaded', () => {
  // Initial Load
  // loadAdvice(link);

  // Click Event
  document.querySelector('#getAdvice').addEventListener('click', () => {
    document.querySelector('#adContainer').classList.add('loading');
    loadAdvice(link);
  });
});

function loadAdvice(link) {
  const adContainer = document.querySelector('#adContainer');

  fetch(link).then(res => res.json())
    .then(data => setTimeout(() => {
      // update id and message
      document.querySelector('#adNum').innerHTML = data.slip.id;
      document.querySelector('#adMsg').innerHTML = data.slip.advice;

      // remove error class (incase)
      adContainer.classList.remove('error');
      // remove loading class
      adContainer.classList.remove('loading');
    }, 1000))
    .catch(() => setTimeout(() => {
      // add error class
      adContainer.classList.add('error');
      // remove error class
      adContainer.classList.remove('loading');
    }, 1000));
}