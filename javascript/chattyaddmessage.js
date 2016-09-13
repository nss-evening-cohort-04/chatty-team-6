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

	addChatty.storeMessage = function(){
		//this method will push 
		//the user message into the array
		var userMessage = document.getElementById("input-message").value;
		messageArray.unshift({"message":userMessage});	
	};

	addChatty.printMessages = function(){
		var newMessages = "";
		var currentMessage ="";

		for(var i =0; i < messageArray.length; i++){
			currentMessage = messageArray[i].message;
			newMessages += `<div id='message-${[i]}'>`;
	    	newMessages += `<p>${currentMessage}</p>`;
	    	newMessages += "<button id='deleteBtn' type='button' class='btn'>Delete</button><br/>";
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
