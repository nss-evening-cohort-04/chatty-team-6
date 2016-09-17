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
	var currentMessage ="";
	addChatty.storeMessage = function(time){
		//this method will push 
		//the user message into the array
		var userMessage = document.getElementById("input-message").value;
		messageArray.unshift({"message":userMessage,"time":time});	
	};

	addChatty.printMessages = function(){
		var newMessages = "";
		
		console.log(messageArray);
		for(var i =0; i < messageArray.length; i++){
			currentMessage = messageArray[i].message;
			currentTime = messageArray[i].time;
			newMessages += `<div id='message-${[i]}'>`;
	    	newMessages += `<p>${currentMessage}</p>`;
	    	newMessages += `<p class="tiny">time written: ${currentTime}</p>`;
	    	newMessages += `<button id="deleteBtn-${i}" type='button' class='btn'>Delete</button><br/>`;
	    	newMessages +=`</div>`;
		}

		printTo.innerHTML =  newMessages;	
	};



	addChatty.clearMessageArray = function(){
		messageArray = [];
	};
	addChatty.removeIndividualMessage = function(id){
		for(var i = 0; i < messageArray.length; i++){
			if(id === `deleteBtn-${i}`){
			var element = document.getElementById(id);
			console.log(element);
			var index = messageArray.indexOf(element.parentNode.childNodes[0].innerText);
			console.log(element.parentNode.childNodes[0].innerText);
			console.log(index);
			messageArray.splice(index, 1);
			}
		}
	}
	addChatty.removeMessage = function(target){
		console.log('target',target);
		//for(var i = 0; i < messageArray.length; i++){
			console.log('parentNode:',target.parentNode);
			//if (target.id ===( `deleteBtn-${i}`)){
				target.parentNode.parentNode.removeChild(target.parentNode);
			//}
		//}
	};
	return addChatty;
})(Chatty || {});
