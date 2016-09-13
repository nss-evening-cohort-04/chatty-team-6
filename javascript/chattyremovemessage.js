var Chatty = (function(removeChatty)
{
	console.log("chattyremovemessage.js");
	// var messageArray = [];

	// addChatty.storeMessage = function(){
	// 	//this method will push 
	// 	//the user message into the array
	// 	var userMessage = document.getElementById("input-message").value;
	// 	messageArray.unshift({"message":userMessage});	
	// };

	// addChatty.printMessages = function(){
	// 	var newMessages = "";
	// 	var currentMessage ="";

	// 	for(var i =0; i < messageArray.length; i++){
	// 		currentMessage = messageArray[i].message;
	// 		newMessages += `<p id="message-${[i]}">${currentMessage} </p><button type="button">Delete</button><br/>`
	// 	}
	// 	return newMessages;	
	// };
	removeChatty.removeMessage = function(target){
		if (target.id === "deleteBtn"){
			target.parentNode.parentNode.removeChild(target.parentNode);
		}

	};


return removeChatty;
})(Chatty || {});