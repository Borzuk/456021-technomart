// Попапы главной

var link = document.querySelector(".btn__write-us");
var mapLink = document.querySelector(".open-map");

var popup = document.querySelector(".modal--write-us");
var popupMap = document.querySelector(".modal--map");
var close = popup.querySelector(".modal-close");
var closeMap = popupMap.querySelector(".modal-close");

var form = popup.querySelector("form");
var person = popup.querySelector("[name=person]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal--show");
});

form.addEventListener("submit", function (evt) {
  if (!person.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести ФИО и 'E-Mail'");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    }
  }
});

// Слайдер на главной

var slides = document.querySelectorAll('.slider__item');
var slidesControl = document.querySelectorAll('.slider__control--radio i');
var arrLeft = document.querySelector(".slider__control--left");
var arrRight = document.querySelector(".slider__control--right");
var currentSlide = 0;

arrLeft.addEventListener("click", function (evt) {
  evt.preventDefault();
  slides[currentSlide].classList.toggle("visually-hidden");
  slidesControl[currentSlide].classList.toggle("active");
  currentSlide = (currentSlide-1+slides.length)%slides.length;
  slides[currentSlide].classList.toggle("visually-hidden");
  slidesControl[currentSlide].classList.toggle("active");
});

arrRight.addEventListener("click", function (evt) {
   evt.preventDefault();
   slides[currentSlide].classList.toggle("visually-hidden");
   slidesControl[currentSlide].classList.toggle("active");
   currentSlide = (currentSlide+1+slides.length)%slides.length;
   slides[currentSlide].classList.toggle("visually-hidden");
   slidesControl[currentSlide].classList.toggle("active");
});


// Радио баттоны для слайдера

var slider = document.querySelector('.slider');
var controlRadio = slider.querySelectorAll('.slider__radio');
var sliderItems = slider.querySelectorAll('.slider__item');
var index = 0;

slider.addEventListener('click', controlSliderRadio);

function controlSliderRadio (evt) {
  evt.preventDefault();
  if(!evt.target.classList.contains('active') && evt.target.classList.contains('slider__radio')) {
    for (var i=0; i < controlRadio.length; i++) {
      if(controlRadio[i].classList.contains('active')) {
        index = i;
      }
      controlRadio[i].classList.remove('active');
      sliderItems[i].classList.remove('visually-hidden');
    }
    evt.target.classList.add('active');
    sliderItems[index].classList.add('visually-hidden');
  }
}
