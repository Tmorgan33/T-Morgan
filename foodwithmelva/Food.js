console.log("Can I take Your order?")
window.onload = function(){


var input = document.querySelector("input");
var button = document.querySelector("button");

    button.addEventListener ("click", function(addorder){

        var menu = {
            "fries": 10,
            "shakes": 8
        };
        
        var yourOrder = input.value;   
        yourOrder = yourOrder.split(",");   
        for(var i = 0; i < yourOrder.length; i++){ 
            var newOrder = yourOrder[i].split(":")
            newOrder[0] = newOrder[0].trim();
            newOrder[1] = newOrder[1].trim();

                
            for (var items in menu) {
                if (newOrder[0] == items) {
                // console.log(newOrder[0]);
                    console.log ('your order is available');
                    
            var qty = menu[items];
            console.log(qty);

            var remainder = qty - newOrder[1];
            console.log(remainder);                  
                    console.log ('you have this many left');    
                    console.log(items);
                    }
                    
                 } 

                
                
                }    
            }
        );
            
    };