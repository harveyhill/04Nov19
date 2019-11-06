function LoadJoke(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            //let resp = JSON.parse(this.response);
            //document.querySelector("#joketext").innerHTML = resp.joke;
            document.querySelector("#joketext").innerHTML=this.response;
        }
    }
    xhr.open("GET", "https://icanhazdadjoke.com/", true);
    xhr.setRequestHeader('Accept','text/plain');
    xhr.send();
}
LoadJoke();