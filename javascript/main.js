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
var userMesssageMain = document.getElementById("input-message");
var printTo = document.getElementById("printed-message");
userMesssageMain.addEventListener('keydown',function(e){
	if(13 == e.keyCode){
		Chatty.storeMessage();
		printTo.innerHTML = Chatty.printMessages();
	}
});

