//javascript.js

/*document.write("Xin chào anh thắng");
console.log("Chào bé");
window.alert("Chào");
*/

function Changtext()
{
	var content = document.getElementById("change_text");
	var status = document.getElementById("change_text");
	if (status.className=="1"){
		content.innerHTML="Xin chào Thắng gà!";
		status.className="";
	}
	else {
		content.innerHTML="Xin chào ";
		status.className="1";
	}
}
