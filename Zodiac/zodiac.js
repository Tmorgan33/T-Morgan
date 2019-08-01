"use strict"

var slct1=document.getElementById("slct1");
var slct2=document.getElementById("slct2");
var submitbutton=document.querySelector(".submitbutton");
submitbutton.onclick=function(){
var month=slct1.value;
var date=slct2.value;
var input = month + " " + date;
}
var dataBase = loadDoc();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    function dataBase() {
        // loadDoc() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }
};
xhttp.open("GET", "db.txt", true);
xhttp.send();
