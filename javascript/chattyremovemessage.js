var Chatty = (function(removeChatty)
{


	removeChatty.editMessage = function(target){
		
			var editText = document.getElementById(target.parentNode.id).childNodes[0].innerText;
			document.getElementById('input-message').value = editText;
		
	};


return removeChatty;
})(Chatty || {});