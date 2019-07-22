"use strict"

var slct1=document.getElementById("slct1");
var slct2=document.getElementById("slct2");
var submitbutton=document.querySelector(".submitbutton");
submitbutton.onclick=function(){
var month=slct1.value;
var date=slct2.value;
var input = month + " " + date;

console.log (input);
}