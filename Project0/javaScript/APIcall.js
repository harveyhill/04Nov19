 function apiCall(CurrTo,CurrFrom){
   CurrTo=CurrTo.toUpperCase();
   CurrFrom=CurrFrom.toUpperCase();

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
  document.getElementById("API_result").innerHTML = this.response;
      
    }
  };
 
xhr.open("GET", "https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from="+CurrFrom+"&to="+CurrTo);
//xhr.setRequestHeader("x-rapidapi-host", "currency-exchange.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d3981cdeafmsh61f5757418a049fp1e9a42jsne5f8af96930c");
xhr.send();

}