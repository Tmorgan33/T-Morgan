"use script"

var days = 
["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"]

var input = document.querySelector("input")
var button = document.querySelector("button");
button.addEventListener ("click", function() {
    
    var chosenDay = input.value;
    chosenDay = chosenDay.split(",");
    for (var i = 0; i < chosenDay.length; i++);{
        // chosenDay = chosenDay.trim();

        if(chosenDay == days) {
            console.log('good choice');
        }   
    };
});