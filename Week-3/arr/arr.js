<<<<<<< HEAD
"use script"

var arr = ["a", "b", "c"];
var temparr = [];

for(var i = 0; i < arr.length; i ++){
        var tempstring = arr[i] + i;

        temparr.push(tempstring);
}

for(var j = 0;  j<temparr.length; j ++){
    arr.push(temparr,arr);

}
console.log(arr, temparr);


arr.push (temparr);

=======
"use script"

var arr = ["a", "b", "c"];
var temparr = [];

for(var i = 0; i < arr.length; i ++){
        var tempstring = arr[i] + i;

        temparr.push(tempstring);
}

for(var j = 0;  j<temparr.length; j ++){
    arr.push(temparr,arr);

}
console.log(arr, temparr);


arr.push (temparr);

>>>>>>> ce437ab9f5a88b6727e69bdf3ebc9f0dfe33ef2b
console.log(temparr);