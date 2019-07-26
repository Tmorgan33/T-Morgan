console.log("hey how are you");
window.onload = function(){

var button = document.querySelector("button");
var input = document.querySelector("input");
var choices = document.querySelector('.choices');
var menu = {"Fries": 10, 
             "Shakes": 20,
             "BaconBite": 50, 
             "Chicken": 45, 
             "Fruit Bowl": 9, 
             "Chips": 29, 
             "Hot Dogs": 104, 
             "Salad": 56, 
             "Pizza": 29, 
             "Coke": 18}
button.addEventListener("click", function(){

var customerOrder = input.value;
var itemPair = customerOrder.split(", ");
for(var i = 0; i < itemPair.length; i++){
    var items = itemPair[i].split(": ");
var menuItems = Object.keys(menu)
var menuQuan = Object.values(menu)
for(counter=0; counter < menuItems.length; counter++){
    if (menuItems[counter] == items[0]) {
    var remainder = menuQuan[counter] - items[1];
    console.log(remainder);
    }
  }
}

});
//choices.addEventListener("click", function(){
//menu = document.createElement('p');
//alert('Fries, Shakes, BaconBite, Chicken, Fruit Bowl, Chips, Hot Dog');



//})






};

