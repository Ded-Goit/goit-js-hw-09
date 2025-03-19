# goit-js-hw-09

                     Task 1 - Image Gallery

This task iscompleted in the files 1-gallery.html and 1-gallery.js.

Create a gallery using the SimpleLightbox library, which will completely handle
image clicks, opening andclosing the modal window, and scrolling through images
using the keyboard. You need to change the gallery card layout a bit, use this
template.

<li class="gallery-item">
	<a class="gallery-link" href="large-image.jpg">
		<img 
		  class="gallery-image" 
		  src="small-image.jpg" 
		  alt="Image description" 
		/>
	</a>
</li>
Add the SimpleLightbox library as a project dependency using npm .

In order to connect the library's CSS code to the project, you need to add one
more import, in addition to the one described in the documentation.

// Described in the documentation import SimpleLightbox from "simplelightbox";
// Additional style import import "simplelightbox/dist/simple-lightbox.min.css";

The next step is to initialize the library after creating and adding gallery
elements to ul.gallery. To do this, read the SimpleLightbox documentation —
first of all, the "Usage" and "Markup" sections.

After that, look at the "Options" section in the documentation and add the
display of captions to images from the alt attribute. Let the caption be at the
bottom and appear after 250 milliseconds after the modal window opens.

The live page displays a gallery of images from the images data array The image
gallery is styled according to the layout The data for the gallery is created
dynamically in JS No native listeners The SimpleLightbox library is connected
using npm The library instance is initialized after adding the gallery elements
to the DOM and outside of any functions When you click on a gallery element, a
modal window of the connected library opens, which contains an enlarged version
of the image that was clicked on. All the basic functionality of the library
works After 250 milliseconds after opening the modal window, the contents of the
alt attributeappears from below, as a caption for the image

                             Task 2 - Feedback Form

This task is completed in the files 2-form.html and 2-form.js.

Add the form markup to the HTML. A script is written in JS that will save the
values ​​of the fields to local storage when the user types something.

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

The live page displays a form with two form elements and a submit button. The
form is styled according to the layout. The form listens for the input and
submit events. When data is entered into any form element, it is saved to local
storage under the "feedback-form-state" key. The saved data does not contain
spaces at the edges. Entering data into one form field does not delete data in
the storage for another. When the page is refreshed, data from the local storage
is substituted into the form elements, and there are no undefined values ​​in
the form fields. When submitting the form, there is a check to ensure that both
form elements are filled in. When submitting the form, if both form elements are
filled in, it is displayed in console object with email, message fields and
their current values, and the storage and form fields are cleared. If after
submitting the form, data is entered into any form element, the data from the
previous submission does not appear in the local storage.
