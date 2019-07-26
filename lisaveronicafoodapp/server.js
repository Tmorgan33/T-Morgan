function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
     
       //document.getElementById("demo").innerHTML = this.responseText;
       //console.log(this.responseText);
       //var google = JSON.stringify(this.responseText);
        console.log(this.responseText);
      }

      //else if (this.readyState == 4 && this.status == 200){
        //console.log('sorry, opage not found');
       //} 



    };
    //xhttp.open("GET", "lisa.txt", true);
    //xhttp.open("GET", "https://raw.githubusercontent.com/Ruffinsan03/MyFirstApp/master/README.md", true);
    xhttp.open("GET", "http://localhost:8080", true);
    xhttp.send(); }