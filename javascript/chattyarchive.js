// IIFE to load JSON File 
// and return array of objects

var Chatty = (function(){

	
	function executeThisCodeIfXHRFails () {
	  console.log("An error occurred while transferring");
	}

	function executeThisCodeWhenChunksArrive () {
	}
	var messageDiv = document.getElementById("previous-message");

	function executeThisCodeAfterFileLoaded () {
		var data = JSON.parse(this.responseText);
		var messageData = "";
		var currentMessage;
		data.messageGroup.reverse();

	for (var i = 0; i < data.messageGroup.length; i++) {
	    currentMessage = data.messageGroup[i].message;
	    currentTime = data.messageGroup[i].time;
	    //below is ES6 notation
	    //can be written "<h1>"+currentSong.title
	    messageData += `<div id='old-message-${[i]}'>`;
	    	messageData += `<p>${currentMessage}</p>`;
	    	messageData += `<p class="tiny">${currentTime}</p>`;
	    	messageData += "<button id='deleteBtn-${[i]}' type='button' class='btn'>Delete</button><button id='edit-${[i]}' class='btn'>Edit</button><br/>";
	    messageData +="</div>";

	 };

	  messageDiv.innerHTML = messageData;
	}

	 messageDiv.addEventListener("click",function(e){
	 	console.log("target",e.target);
	 	Chatty.removeMessage(e.target);
	 });

	

	var myRequest = new XMLHttpRequest();
	// console.log("myRequest", myRequest);

	myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
	myRequest.addEventListener("error", executeThisCodeIfXHRFails)
	myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
	myRequest.open("GET", "loadmessages.json")
	myRequest.send();

})();