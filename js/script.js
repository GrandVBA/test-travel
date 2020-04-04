var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close');
var link = document.querySelector('.toggle');
var search = document.querySelector('.modal__search');
var form = document.querySelector('.form');

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

search.addEventListener('click', function(evt) {
  evt.preventDefault();
});

overlay.addEventListener('click', function(evt){
  popup.classList.remove('modal-show');
  popup.classList.add('modal-show-two');
  overlay.classList.remove('overlay-show');
});

/*form.addEventListener('submit', function(evt){
  if (!checkReq.check) {
    evt.preventDefault();
    checkReqErr.classList.remove('checkbox__err');
    checkReqErr.classList.add('checkbox__err');
  }
});*/

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.add('modal-show-two');
      overlay.classList.remove('overlay-show');
    }
  }
});


//ниже идет отк списки

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});