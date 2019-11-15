



var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://pnpninja-daily-comicstrips-v1.p.rapidapi.com/getComicLinks");
xhr.setRequestHeader("x-rapidapi-host", "pnpninja-daily-comicstrips-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");

xhr.send(data);

/*
Reference Example: Harvey Hill

function ajaxExample(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let vader = JSON.parse(this.response);
            document.querySelector("#starwars").innerHTML = vader.name;
        }
    }
    xhr.open("GET", "https://swapi.co/api/people/4/", true);
    xhr.send();
}
*/