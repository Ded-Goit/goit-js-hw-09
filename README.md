# goit-js-hw-09

                  Завдання 1 - Галерея зображень Task 1 - Image Gallery

Виконано це завдання у файлах 1-gallery.html і 1-gallery.js. This task is
completed in the files 1-gallery.html and 1-gallery.js.

Зроби галерею, використовуючи бібліотеку SimpleLightbox, яка повністю візьме на
себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а
також гортання зображень за допомогою клавіатури. Необхідно трохи змінити
розмітку картки галереї, використовуй цей шаблон. Create a gallery using the
SimpleLightbox library, which will completely handle image clicks, opening and
closing the modal window, and scrolling through images using the keyboard. You
need to change the gallery card layout a bit, use this template.

<li class="gallery-item">
	<a class="gallery-link" href="large-image.jpg">
		<img 
		  class="gallery-image" 
		  src="small-image.jpg" 
		  alt="Image description" 
		/>
	</a>
</li>

Додай бібліотеку SimpleLightbox як залежність проєкту, використовуючи npm . Add
the SimpleLightbox library as a project dependency using npm .

Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один
імпорт, крім того, що описаний у документації. In order to connect the library's
CSS code to the project, you need to add one more import, in addition to the one
described in the documentation.

// Описаний в документації import SimpleLightbox from "simplelightbox"; //
Додатковий імпорт стилів import "simplelightbox/dist/simple-lightbox.min.css";
// Described in the documentation import SimpleLightbox from "simplelightbox";
// Additional style import import "simplelightbox/dist/simple-lightbox.min.css";

Наступний крок це ініціалізація бібліотеки після створення і додання елементів
галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox —
насамперед секції «Usage» і «Markup». The next step is to initialize the library
after creating and adding gallery elements to ul.gallery. To do this, read the
SimpleLightbox documentation — first of all, the "Usage" and "Markup" sections.

Після цього подивись у документації секцію «Options» і додай відображення
підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється
через 250 мілісекунд після відкриття модального вікна. After that, look at the
"Options" section in the documentation and add the display of captions to images
from the alt attribute. Let the caption be at the bottom and appear after 250
milliseconds after the modal window opens.

На живій сторінці відображається галерея зображень із масиву даних images
Галерея зображень стилізована згідно з макетом Дані для галереї створені
динамічно в JS Відсутні власні слухачі Підключена бібліотека SimpleLightbox з
використанням npm Екземпляр бібліотеки ініціалізований після додавання елементів
галереї у DOM і поза межами будь-яких функцій При кліку по елементу галереї
відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена
версія зображення, по якому клікнули. Весь базовий функціонал бібліотеки працює
Через 250 мілісекунд після відкривання модального вікна вміст атрибута alt
з’являється знизу, як підпис до зображення The live page displays a gallery of
images from the images data array The image gallery is styled according to the
layout The data for the gallery is created dynamically in JS No native listeners
The SimpleLightbox library is connected using npm The library instance is
initialized after adding the gallery elements to the DOM and outside of any
functions When you click on a gallery element, a modal window of the connected
library opens, which contains an enlarged version of the image that was clicked
on. All the basic functionality of the library works After 250 milliseconds
after opening the modal window, the contents of the alt attributeappears from
below, as a caption for the image

                      Завдання 2 - Форма зворотного зв'язку Task 2 - Feedback Form

Виконано це завдання у файлах 2-form.html і 2-form.js. This task is completed in
the files 2-form.html and 2-form.js.

Додай у HTML розмітку форми. У JS написано скрипт, який буде зберігати значення
полів у локальне сховище, коли користувач щось друкує. Add the form markup to
the HTML. A script is written in JS that will save the values ​​of the fields to
local storage when the user types something.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

На живій сторінці відображається форма з двома елементами форми і кнопкою типу
submit Форма стилізована згідно з макетом На формі прослуховуються події input і
submit При введенні даних у будь-який елемент форми вони записуються у локальне
сховище під ключем "feedback-form-state", збережені дані не містять пробіли по
краях Введення даних в одне поле форми не видаляє дані в сховищі для іншого При
оновленні сторінки дані з локального сховища підставляються в елементи форми, у
полях форми відсутні undefined При сабміті форми є перевірка, щоб обидва
елементи форми були заповнені Під час сабміту форми, якщо обидва елементи форми
заповнені, виводиться у консоль об'єкт з полями email, message та їхніми
поточними значеннями, а також очищаються сховище і поля форми Якщо після сабміту
форми ввести в будь-який елемент форми дані, то в локальному сховищі не
з’являються дані від попереднього сабміта The live page displays a form with two
form elements and a submit button. The form is styled according to the layout.
The form listens for the input and submit events. When data is entered into any
form element, it is saved to local storage under the "feedback-form-state" key.
The saved data does not contain spaces at the edges. Entering data into one form
field does not delete data in the storage for another. When the page is
refreshed, data from the local storage is substituted into the form elements,
and there are no undefined values ​​in the form fields. When submitting the
form, there is a check to ensure that both form elements are filled in. When
submitting the form, if both form elements are filled in, it is displayed in
console object with email, message fields and their current values, and the
storage and form fields are cleared. If after submitting the form, data is
entered into any form element, the data from the previous submission does not
appear in the local storage.
