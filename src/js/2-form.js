const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';
// Об'єкт для збереження даних форми
let formData = { email: '', message: '' };
// Функція для збереження даних у локальне сховище
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
// Функція для завантаження збережених даних у форму
function loadFromLocalStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
}
// Слухаємо подію input і зберігаємо дані в локальне сховище
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
});
// При завантаженні сторінки перевіряємо сховище
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
// Обробник події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  // Перевіряємо, чи всі поля заповнені
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  // Виводимо об'єкт у консоль
  console.log('Form submitted:', formData);
  // Очищаємо сховище та форму
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
