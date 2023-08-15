const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  emailInput.value = savedData.email || '';
  messageTextarea.value = savedData.message || '';
}

const saveToLocalStorage = throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

form.addEventListener('input', saveToLocalStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  
  console.log('data', formData);

  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem(STORAGE_KEY);
});


