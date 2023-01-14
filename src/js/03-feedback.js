import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = form.querySelector('[name="email"]');
const textareaEl = form.querySelector('[name="message"]');

function updateValue(e) {
  const email = inputEl.value;
  const message = textareaEl.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email, message })
  );
}

form.addEventListener('input', throttle(updateValue, 500));

const storageValue = localStorage.getItem('feedback-form-state');

if (storageValue) {
  const parsedValue = JSON.parse(storageValue);

  inputEl.value = parsedValue.email;
  textareaEl.value = parsedValue.message;
}

function clearForm(e) {
  e.preventDefault();

  const email = inputEl.value;
  const message = textareaEl.value;

  const userInfo = localStorage.getItem('feedback-form-state');
  const parsedUserInfo = JSON.parse(userInfo);
  if (!email || !message) {
    alert('You must fill all fields in the form!');
  }

  inputEl.value = '';
  textareaEl.value = '';
  localStorage.removeItem('feedback-form-state');

  console.log(parsedUserInfo);
}

form.addEventListener('submit', clearForm);
