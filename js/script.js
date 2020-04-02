var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close');
var link = document.querySelector('.toggle');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  popup.classList.remove('modal-show-two');
  overlay.classList.add('overlay-show');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.add('modal-show-two');
  overlay.classList.remove('overlay-show');
});