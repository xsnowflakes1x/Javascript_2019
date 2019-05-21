/*javascript*/

function myFocus(obj) {
	obj.style.background = "yellow";
}

function myBlur(obj) {
	obj.style.background = "white"; 
 obj.value =obj.value.toUpperCase(); // hoặc  document.getElementById("fname").value = document.getElementById("fname").value.toUpperCase();
}

function Tong() {
var dtoan = document.getElementById("dtoanId").value;// gán giá trị cho dtoan
var dvan  = document.getElementById("dvanId").value;	

var kq = (parseInt(dtoan) +parseInt(dvan))/2;// chuyển string->number

if(!isNaN(kq))
	document.getElementById("tongId").value=kq;
}
