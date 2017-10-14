import Siema from 'siema';

const siema = document.querySelector('.works__slider');
const slider1 = new Siema({
  selector: siema,
  duration: 1200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: false,
  onChange: getDots,
  onInit: getFirstDot,
});

const siema2 = document.querySelector('.team__slider');
const slider2 = new Siema({
  selector: siema2,
  duration: 1200,
  easing: 'ease-out',
  perPage: {
    425: 1,
    768: 2,
    1100: 3,
  },
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true,

});


Siema.prototype.addArrows = function() {
  // make buttons & append them inside Siema's container
  this.prevArrow = document.createElement('button');
  this.nextArrow = document.createElement('button');
  this.prevArrow.classList.add('ion-ios-arrow-left');
  this.nextArrow.classList.add('ion-ios-arrow-right');
  // this.prevArrow.textContent = 'previous slide';
  // this.nextArrow.textContent = 'next slide';
  this.selector.appendChild(this.prevArrow)
  this.selector.appendChild(this.nextArrow)
  // event handlers on buttons
  this.prevArrow.addEventListener('click', () => this.prev());
  this.nextArrow.addEventListener('click', () => this.next());
}
slider1.addArrows();
slider2.addArrows();


function getDots() {
  let thisSlide = this.currentSlide;
  let buttons = document.querySelectorAll('.ion-ios-circle-outline')
  buttons.forEach(function(elem, index) {
    elem.classList.remove('ion-record');
    if (index == thisSlide) {
      elem.classList.add('ion-record');
    }
  });
}

function getFirstDot() {
  let thisSlide = this.currentSlide;
  document.addEventListener("DOMContentLoaded", function(event) {
    let buttons = document.querySelectorAll('.ion-ios-circle-outline');
    buttons.forEach(function(elem, index) {
      if (index == thisSlide) {
        elem.classList.add('ion-record');
      }
    });

  });
}


// // Add a function that generates pagination to prototype
Siema.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('ion-ios-circle-outline');
    btn.addEventListener('click', () => this.goTo(i));
    btn.addEventListener('click', () => {
      let btns = document.querySelectorAll('.ion-ios-circle-outline')
      btns.forEach(elem => {
        elem.classList.remove('ion-record');
      })
      btn.classList.toggle('ion-record');
    });
    this.selector.appendChild(btn);
  }
}
slider1.addPagination();
