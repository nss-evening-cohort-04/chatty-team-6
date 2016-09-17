var mainElement = document.getElementsByTagName("body");


function makeItDark() {
  mainElement[0].classList.toggle("dark");
	document.getElementById("choice-dark").style.color = "darkslategray";
	document.getElementById("choice-large").style.color = "darkslategray";  
}

var darkenThings = document.getElementById("choice-dark");
darkenThings.addEventListener('click', makeItDark);

var printTo = document.getElementById("printed-message");
	printTo.addEventListener("click",function(e){
	 	
	 	console.log("target",e.target);
	 	Chatty.removeMessage(e.target);
	 	Chatty.removeIndividualMessage(e.target.id);
	 	if(e.target.parentNode.parentNode.id === "previous-message"){
	 		Chatty.archiveremoveMessage(e.target);

	 	};
	 	// if(target.id === "edit"){
	 	// 		console.log("target",e.target);
	 	// 		Chatty.editMessage(e.target);
	 	// 	}
	 });
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
	Chatty.clearMessageArray();
	// document.getElementById("clear-message").setAttribute("disabled", true);
};

// function activateClear(){
// 	if(document.getElementById("printed-message") != null){
// 		document.getElementById("clear-message").setAttribute("disabled", false);
// 	}else if(document.getElementById("previous-message") != null){
// 		document.getElementById("clear-message").setAttribute("disabled", false);
// 	}
// }

var deleteAll = document.getElementById('clear-message');
deleteAll.addEventListener('click', clearMessage);





