const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';
// Object for saving form data
let formData = { email: '', message: '' };
// Function for saving data to local storage
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// Function for loading saved data to the form
function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
// Listen to the input event and save the data to local storage
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});
// When loading the page, check the storage
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
// Submit event handler
form.addEventListener('submit', event => {
  event.preventDefault();

  // Check if all fields are filled
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  // Output the object to the console
  console.log('Form submitted:', formData);
  // Clear the storage and the form
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
