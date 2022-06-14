var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elWarning = document.querySelector(".warning");
var elSpan1 = document.querySelector(".result-people");
var elSpan2 = document.querySelector(".result-bycicle");
var elSpan3 = document.querySelector(".result-car");
var elSpan4 = document.querySelector(".result-plane");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var inputVal = +elInput.value;

  if (inputVal <= 0) {
    elWarning.textContent = "Raqam va musbat son kiriting!";
    elInput.classList.add("is-invalid");
    elInput.classList.remove("is-valid");
    return;
  } else {
    elWarning.textContent = "";
    elInput.classList.add("is-valid");
    elInput.classList.remove("is-invalid");
  }

  elSpan1.textContent = people().toFixed(2);
  elSpan2.textContent = bycicle().toFixed(2);
  elSpan3.textContent = car().toFixed(2);
  elSpan4.textContent = plane().toFixed(2);
});

function people(n = 3.6) {
  return +elInput.value / n;
}
function bycicle(n = 20.1) {
  return +elInput.value / n;
}
function car(n = 70) {
  return +elInput.value / n;
}
function plane(n = 800) {
  return +elInput.value / n;
}
