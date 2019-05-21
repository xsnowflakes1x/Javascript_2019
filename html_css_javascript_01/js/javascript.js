
var button_id = document.getElementById("button");
var content_id = document.getElementById("content");

function TextChange_BoxTransition()
{	if(button_id.innerHTML=="Hiện")
	{
		button_id.innerHTML="Ẩn";
		content_id.className="open";
	}
	else 
	{
		button_id.innerHTML="Hiện";
		content_id.className="content";
	}
}
