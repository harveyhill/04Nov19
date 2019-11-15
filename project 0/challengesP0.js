

//Here we have a variety of Javascript challenges

//Challenge NO. 3 - REVERSE STRING 

function reverseString(someStr) {
    var someStr = document.getElementById("reverse").value; 
    let newString="";
    for(i = someStr.length -1; i >= 0; i--){
        newString += someStr[i];  
    }
    document.getElementById("output0").value = newString;
}


//Challenge NO.6 - EVEN NUMBER 
function isEven(num){
    var num = document.getElementById("evenOdd").value;
    if(Math.floor(num / 2) * 2 == num){
        document.getElementById("output00").value=("It's even!");
    }else{
        document.getElementById("output00").value=("It's odd!");
    }

}
//Challenge NO. 2 - Bubble Sort 
function bubbleSort(numArray) {
    let len = numArray.length-1; 
    let swap; 
    var numArray2 = numArray2;
    do{
        swap = false; 
        for(i=0; i<len; i++){
            if(numArray2[i] > numArray2[i+1]){
                let temp = numArray2[i]; 
                numArray2[i] = numArray2[i+1]; 
                numArray2[i+1] = temp; 
                swap = true; 
            }
        }
        numArray--;
    } while(swap); 
    return numArray; 
}

//Challenge NO. 7 - Palindrome
function isPalindrome(someStr) {
    var someStr = document.getElementById("pal").value;
    let string = ""; 
    someStr = someStr.toLowerCase();
    for(var i= someStr.length -1; i >= 0; i--){
        string += someStr[i]; 
    }
    if(string==someStr){
        document.getElementById("output3").value = true; 
    }else{
        document.getElementById("output3").value = false; 

    }
}

//Challenge NO. 10 - Delete an Element
function deleteElement(array){
    var array = document.getElementById("del").value;//input 
    var array = [];
    var display = "";
    display = "Before deletion" + array.length;
    delete array[2];
    display = "After deletion" + array.length;
    document.getElementById("output4").value;
}


 
//Challenge NO. 4 - Factorial using Recursion 

function Factorial(num){
    if(num < 0) return; //termination case - if num less than 0 return
    if(num === 0) return 1; // base case - sweet spot in order to run recursive code
    return num * Factorial(num-1); // recursion takes place here 
}

 //Challenge NO. 7 -Fibonacci Recursive 
function fib2(n){
    //var n = document.getElementById("fib").value;
    if (n <= 2) return 1; //base case - if true carry out recursion 
        return fib2(n-2) + fib2(n-1); //recursion occurs here 
    } 
    



//Challenge NO. 15 - Descending Order 


//Challenge NO. 14 - Clock 
function updateTime(){
    var today = new Date(); 
    var hrs = today.getHours(); 
    var mins = today.getMinutes(); 
    var secs = today.getSeconds(); 
    mins = checkTime(mins); 
    secs = checkTime(secs); 
    document.getElementById('clock').innerHTML = hrs + ":" + mins + ":" + secs;
    var tO = setTimeout(updateTime, 500); 
}
function checkTime(i){
    if(i<10){
        i = "0" + i;
    }
    return i; 
}


//API
function ajax(){

    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let vader = JSON.parse(this.response);
        document.getElementById("flight-dest").value=vader.Places[0].CountryName;
		//console.log(vader.Places[0].CountryName);
	}
});

xhr.open("GET", "https://skyscanner-skys-canner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", true);
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "6f6b33dda5msh4b865b5fcc9bad9p18fdf0jsn9762ec1fb900");

xhr.send(data);
}
