//chatty-augmenter

// IIFE that contains a function 
// to add user entered text to text 
// area, along with a method to read
// messages, and delete button for 
// individual messages.  
// Messages should be stored in 
// private array.

var Chatty = (function(addChatty)
{
	
	var messageArray = [];

	addChatty.storeMessage = function(){
		//this method will push 
		//the user message into the array
		var userMessage = document.getElementById("input-message").value;
		messageArray.push({"message":userMessage});	
	};

	addChatty.printMessages = function(){
		var newMessages = "";
		var currentMessage ="";		
		for(var i =0; i < messageArray.length; i++){
			currentMessage = messageArray[i].message;
			newMessages += `<p>${currentMessage}</p><button type="button">Delete</button><br/>`
		}
		return newMessages;	
	};


return addChatty;
})(Chatty || {});
