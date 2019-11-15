import { get } from "https";

function ajax(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let vader = JSON.parse(this.response);
            document.querySelector("#flights").innerHTML = vader.name;
        }
    }
} 
xhr.open("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/US?pageIndex=0&pageSize=10");
xhr.send();

  