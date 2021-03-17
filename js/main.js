// selectors
const modal = document.getElementById('simpleModal');
const modalBtns = document.querySelectorAll('.modalBtn');
const closeBtn = document.getElementById('closeBtn');
const divisor = document.getElementById('divisor');
const slider = document.getElementById('slider');
const item = document.querySelectorAll('.i');
const inputs = Array.from(document.querySelectorAll('input'));
const labels = Array.from(document.querySelectorAll('.email-label'));

// globals

var viewed = false;
let running;
var i = 0;

// event listeners

for (var i = 0, len = item.length; i < len; i++) {
  item[i].addEventListener('click', showA);
}

inputs.forEach((btn) => btn.addEventListener('input', validator));
modalBtns.forEach((btn) => btn.addEventListener('click', openModal));

// input.addEventListener('input', validator);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

// funcs

function showA(faq) {
  //  console.log(this.nextElementSibling);
  if (!this.nextElementSibling) {
    return;
  } else {
    this.nextElementSibling.classList.toggle('vis');
  }
}

function validator(txt) {
  console.log('validator');
  txt.preventDefault();
  index = inputs.indexOf(this);
  const contents = this.value.trim();
  if (contents) {
    console.log('THERE IS STUFF');
    labels[index].classList.add('typing');
  } else {
    console.log('THERE IS NO STUFF');
    labels[index].classList.remove('typing');
  }
}

// open modal
function openModal() {
  //console.log(123);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = '17px';
}

// close modal
function closeModal() {
  //console.log(123);
  modal.classList.add('close');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('close');
  }, 490);
}

// close modal by clicking outside
function clickOutside(e) {
  //console.log(123);
  if (e.target == modal) {
    modal.classList.add('close');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('close');
    }, 490);
  }
}
