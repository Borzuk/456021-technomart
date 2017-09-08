  var link = document.querySelector(".btn__write-us");

  var popup = document.querySelector(".modal--write-us");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var person = popup.querySelector("[name=person]");
  var email = popup.querySelector("[name=email]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
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
