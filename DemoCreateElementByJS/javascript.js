//nhập value
//lấy value
//lưu value vào array --> Json --> localStorage
//Hiển thị khi load
//LocalStorage --> JS object --> lấy hiển thị
//chi tiết: 
//Khi bấm button
//tạo thẻ li
//bỏ giá trị vào li 



document.getElementById("btn-save").addEventListener("click", getName);
document.getElementById("btn-delete").addEventListener("click", deleteName);

function getName() {
	var element = document.getElementsByTagName("input")[0];
	var value = element.value;
	if (value == null || value == "")
		alert("mời bạn nhập giá trị!");
	else {
		saveName(value);
		var li = document.createElement("li");
		li.innerHTML = value;
		var ul = document.getElementsByTagName("ul")[0];
		ul.appendChild(li);
	}
}

function checkLocalStorageAndGetKey() {
	var valueKey = localStorage.getItem("key");
	if(valueKey == null || valueKey =="") 
		var array = [];
	else
		valueKey = JSON.parse(valueKey);
	return valueKey;
}	

function saveName(val) {
		var valueKey = checkLocalStorageAndGetKey();
		valueKey.push(val);
		localStorage.setItem("key",JSON.stringify(valueKey));
}

function deleteName() {
	var valueDelete = document.getElementsByTagName("input")[0];
	var ul = document.getElementsByTagName("ul")[0];
	valueDelete = valueDelete.value;
	var valueKey = checkLocalStorageAndGetKey();
	for (var i = 0; valueKey.length > i; i++) {
		if(valueDelete == valueKey[i]) {
			valueKey.splice(i,1);
			ul.removeChild(ul.childNodes[i+1]); // +1 vì thẻ li bắt đầu tại index = 1;
		}
	}
	localStorage.setItem("key",JSON.stringify(valueKey)); //cập nhật
}



// function updateName() {
// 	var valueUpdate = document.getElementsByTagName("input")[0];
// 	var ul = document.getElementsByTagName("ul")[0];
// 	valueUpdate = valueUpdate.value;
// 	var valueKey = checkLocalStorageAndGetKey();
// 	for (var i = 0; valueKey.length > i; i++) {
// 		if(valueUpdate == valueKey[i]) {
// 			valueKey.splice(i,1);
// 			ul.removeChild(ul.childNodes[i+1]); // +1 vì thẻ li bắt đầu tại index = 1;
// 		}
// 	}
// 	localStorage.setItem("key",JSON.stringify(valueKey)); //cập nhật
// }

function showFirst() {
	var getArray = localStorage.getItem("key");
			getArray = JSON.parse(getArray);
	var ul = document.getElementsByTagName("ul")[0];
	for (var i = 0; i < getArray.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = getArray[i];
		ul.appendChild(li);
	}
}
window.onload = showFirst; 

