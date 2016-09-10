var mainElement = document.getElementsByTagName("body");

function makeItDark() {
  mainElement[0].classList.toggle("dark");
}

var darkenThings = document.getElementById("choice-dark");
darkenThings.addEventListener('click', makeItDark);


// function to make large

function makeItLarge() {
  mainElement[0].classList.toggle("large");
}

var enlargeThings = document.getElementById("choice-large");
enlargeThings.addEventListener('click', makeItLarge);


