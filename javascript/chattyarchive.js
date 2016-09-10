// IIFE to load JSON File 
// and return array of objects

var Chatty = (function(){
	
	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}

	function executeThisCodeWhenChunksArrive () {
	}

	function executeThisCodeAfterFileLoaded () {
		var data = JSON.parse(this.responseText);
		console.log("messageData", data);
		var messageData = "";
		var messageDiv = document.getElementById("previous-message");
		var currentMessage;
	for (var i = 0; i < data.messageGroup.length; i++) {
	    currentMessage = data.messageGroup[i].message;
	    //below is ES6 notation
	    //can be written "<h1>"+currentSong.title
	      messageData += `<p>${currentMessage}</p><button type="button">Delete</button><br/>`;

	 };

	  console.log(messageData);
	  messageDiv.innerHTML = messageData;
	}

	var myRequest = new XMLHttpRequest();
	// console.log("myRequest", myRequest);

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails)
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
	myRequest.open("GET", "loadmessages.json")
	myRequest.send();

})();