// JavaScript Document
var city = localStorage.city || "beijing";
document.getElementById("txtCity").value = city;
document.getElementById("btnSave").onclick = function(){
	localStorage.city = document.getElementById("txtCity").value;
	alert("设定成功");
}