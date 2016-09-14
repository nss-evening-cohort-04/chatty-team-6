var mainElement = document.getElementsByTagName("body");


function makeItDark() {
  mainElement[0].classList.toggle("dark");
	document.getElementById("choice-dark").style.color = "darkslategray";
	document.getElementById("choice-large").style.color = "darkslategray";  
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
userMesssageMain.addEventListener('keydown',function(e){
	if(13 == e.keyCode){

		var timeStampMil = Date.now();
    	var date = new Date(timeStampMil);
    	date.toString();
		Chatty.storeMessage(date);
		Chatty.printMessages();
		userMesssageMain.value = "";
	}
});

//if have time, make clear btn disable when individual deleted clicked.
function clearMessage(){
	var everythingNew = document.getElementById("printed-message");
	var everythingOld = document.getElementById("previous-message");
	everythingNew.innerHTML = "";
	everythingOld.innerHTML = "";
	document.getElementById("clear-message").setAttribute("disabled", true);
};

var deleteAll = document.getElementById('clear-message');
deleteAll.addEventListener('click', clearMessage);





