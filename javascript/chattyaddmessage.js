//chatty-augmenter

// IIFE that contains a function 
// to add user entered text to text 
// area, along with a method to read
// messages, and delete button for 
// individual messages.  
// Messages should be stored in 
// private array.
var printTo = document.getElementById("printed-message");
var Chatty = (function(addChatty)
{
	
	var messageArray = [];
	var currentMessage ="";
	addChatty.storeMessage = function(time){
		//this method will push 
		//the user message into the array
		var userMessage = document.getElementById("input-message").value;
		messageArray.unshift({"message":userMessage,"time":time});	
	};

	addChatty.printMessages = function(){
		var newMessages = "";
		

		for(var i =0; i < messageArray.length; i++){
			currentMessage = messageArray[i].message;
			currentTime = messageArray[i].time;
			newMessages += `<div id='message-${[i]}'>`;
	    	newMessages += `<p>${currentMessage}</p>`;
	    	newMessages += `<p class="tiny">time written: ${currentTime}</p>`;
	    	newMessages += "<button id='deleteBtn' type='button'>Delete</button><br/>";
	    	newMessages +="</div>";
		}
		printTo.innerHTML =  newMessages;	
	};

	 printTo.addEventListener("click",function(e){
	 	console.log("target",e.target);
	 	Chatty.removeMessage(e.target);
	 });

return addChatty;
})(Chatty || {});
