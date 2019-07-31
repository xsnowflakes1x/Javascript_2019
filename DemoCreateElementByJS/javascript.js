//nhập value
//lấy value
//lưu value vào array --> Json --> localStorage
//Hiển thị khi load
//LocalStorage --> JS object --> lấy hiển thị
//chi tiết: 
//Khi bấm button
//tạo thẻ li
//bỏ giá trị vào li 


//đọc cái này trước khi làm
document.getElementById("btn-save").addEventListener("click", createName);
document.getElementById("btn-delete").addEventListener("click", deleteName);
document.getElementById("btn-update").addEventListener("click", updateName);
var input = document.getElementsByTagName("input")[0];
var ulTag = document.getElementsByTagName("ul")[0];


function createName() {
	var element = input; //document.getElementsByTagName("input")[0];
	var value = element.value;
	if (value == null || value == "")
		alert("mời bạn nhập giá trị!");
	else {
		saveName(value);
		var li = document.createElement("li");
		li.innerHTML = value;
		var ul = ulTag; //var ulTag = document.getElementsByTagName("ul")[0];
		ul.appendChild(li);
	}
}

function checkLocalStorageAndGetKey() {
	var valueKey = localStorage.getItem("key");
	if(valueKey == null || valueKey =="") 
		 valueKey = [];
	else
		valueKey = JSON.parse(valueKey);
	return valueKey;
}	


function saveName(val) {
		var getArray = checkLocalStorageAndGetKey();
		getArray.push(val);
		localStorage.setItem("key",JSON.stringify(getArray));
}

function deleteName() {
	var valueDelete = input;
	var ul = ulTag;
	valueDelete = valueDelete.value;
	var getArray = checkLocalStorageAndGetKey();
	for (var i = 0; getArray.length > i; i++) {
		if(valueDelete == getArray[i]) {
			getArray.splice(i,1);
			ul.removeChild(ul.childNodes[i+1]); // +1 vì thẻ li bắt đầu tại index = 1;
		}
	}
	localStorage.setItem("key",JSON.stringify(getArray)); //cập nhật
}

var oldVal;
//hiện tên
function showName() {
	var ul = ulTag;
	if(ul.hasChildNodes()) {
		ul.addEventListener("click",getValueLi);
	}
	else alert("ko có gì");
}

function getValueLi(e) {
	var event = e.target;
		input.value = event.innerText;
		oldVal = input.value;
}

//end hiện tên
function updateName() {
	var valueUpdate = input;
	valueUpdate = valueUpdate.value;
	var getArray = checkLocalStorageAndGetKey();
	var idx = getIndex(oldVal);

	for (var i = 0; getArray.length > i; i++) {
		if(getArray.indexOf(getArray[i]) == idx) {
			getArray[i] = valueUpdate; //cập nhật phần tử trong mảng
		}
	}
	localStorage.setItem("key",JSON.stringify(getArray)); //cập nhật mảng
	location.reload();  
}

//lấy vị trí của giá trị input hiện tại trong mảng
function getIndex(oldVal) {
	var getArray = checkLocalStorageAndGetKey();
	for(var i = 0; i < getArray.length; i++ ) {
		if (getArray[i] == oldVal) {
			return getArray.indexOf(oldVal); //trả về vị trí
		}
	}
}

function showFirst() {
	var getArray = checkLocalStorageAndGetKey();

	var ul = ulTag;
	for (var i = 0; i < getArray.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = getArray[i];
		ul.appendChild(li);
	}
	showName();
}
window.onload = showFirst; 

