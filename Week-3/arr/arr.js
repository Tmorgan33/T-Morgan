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

console.log(temparr);