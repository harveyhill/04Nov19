// 15 JavaScript Function Challenges 
//challenge 1
//user submits input number with button
var inputVariable;
window.onload = function(){
    document.querySelector('#getFibonacciResult').addEventListener("click", FibonacciStart);
    console.log('Is this working? CHECK');
}

function fibonacciSequence(x){
    if(x == 0) return 0;
    if(x == 1) return 1;
    if(x == 2) return 3;

    var a = 1, b = 0, temp;

    while(x >= 0){
        temp = a;
        a += b;
        b=temp;
        x--;
    }
    return b;
    //return fibonacciSequence(x-1) + fibonacciSequence(x-2);
    //document.getElementById('result').innerHTML = result;
};

function FibonacciStart() {
    var fibonacciResult = fibonacciSequence(document.getElementById('FibonacciSubmit'));
    document.getElementById('FibonacciSubmit') = fibonacciResult;
    //document.getElementById('FibonacciResult').innerHTML = fibonacciResult;
};

//challenge 2
function bubbleSort(xArray){
    var swapped;
    var temp;
    do {
        swapped = false;
        for (i=0; i < xArray.length()-1; i++) {
            if (xArray[i] > xArray[i+1]) {
                temp = xArray[i];
                xArray[i] = xArray[i+1];
                xArray[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

//challenge 3
function reverseStr(s){
    return s.split('').reverse().join('');
}

//challenge 4
function factorialFunc(n){
    if(n <= 1){
        return 0;
    }
    x=n;
    for(i=n-1;i>=1;i--){
        x = x*i;
    }
    return x;
}

//challenge 5
function getSubstring(s, length, offset){
    if(offset>length){
        console.log("No U!!");
    }
    return s.substring(offset,length);
}

//challenge 6
function isEven(n){
    if((n/2)==(n-(n/2)))
        return true;
    else
        return false;
}

//challenge 7
function isPalindrome(s){
    var n = s.length();

    for(i=0; i<= n/2; i++){
        if(s[i] != s[n-1-i])
            return false;
    }
    return true;
}

//challenge 8
function printShape(shape, height, character){
    //print circle
    if(shape == "circle"){
        var radius = height;
        for (i = 0; i <= 2 * radius; i++) 
        { 
            for (j = 0; j <= 2 * radius; j++) 
            { 
                var distance = sqrt((double)(i - radius) 
                * (i - radius) + (j - radius) 
                * (j - radius)); 
  
            if (distance > radius - 0.5 && 
                distance < radius + 0.5) 
                console.log(character); 
            else
                console.log(" "); 
            } 
                console.log("\n"); 
        } 
    }
    //print rectangle
    if(shape == "rectangle"){
        var b = height/2;
        for(i=1; i<=height;i++){
            for(j=1;j<=b;j++){
                if (i == 1 || i == l || j == 1 || j == b) 
                    console.log(character); 
                else
                    console.log(" "); 
                console.log("\n"); 
            }
        }
    }
    //print square
    if(shape == "square"){
        for(i=1; i<=height;i++){
            for(j=1;j<=(height);j++){
                if (i == 1 || i == l || j == 1 || j == height) 
                    console.log(character); 
                else
                    console.log(" "); 
                console.log("\n"); 
            }
        }
    }
    //print triangle
    if(shape == "triangle"){
        for (i = 1; i <= height; i++) {
            for(j=i;j<height;j++){
                console.log(" ");
            }
            for(j=1; j<=(2*i-1);j++){
                if (i == side || j == 1 || j == (2 * i - 1)) 
                    console.log(character); 
                else
                    console.log(" "); 
            }
            console.log("\n");
        }   
    }
    //print hexagon
    if(shape == "hexagon"){
        var length = height;
        for (i = 1, k = length, l = 2 * length - 1; 
            i < length; i++, k--, l++) 
        { 
            for (j = 0; j < 3 * length; j++) 
                if (j >= k && j <= l) 
                    console.log(character); 
                else
                    console.log(" "); 
            console.log("\n"); 
        } 
            for (i = 0, k = 1, l = 3 * length - 2; 
                i < length; i++, k++, l--) 
            { 
                for (j = 0; j < 3 * length; j++) {
                    if (j >= k && j <= l) 
                        console.log(character); 
                    else
                        console.log(" "); 
                }
                console.log("\n"); 
             } 
    }
}


//challenge 9
function traverseObject(obj){
    let iter;
    for(iter of obj){
        document.querySelector('.output').textContent = iter;
    }
}

//challenge 10
function deleteElement(xArray, index){
     
    delete array[index]; 
  
    console.log(array); 
    document.querySelector('.output').textContent = array;
}

//challenge 11
function spliceElement(xArray){
    var length = xArray.length();

    console.log("Array length is: " + length);
    if(length < 3){
        return "Length less than 3";
    }else{
        xArray.splice(index, 2);
    }
    console.log("Array length is now: " + length);
}

//challenge 12
function Person(name, age){
    this.name = name;
    this.age = age;
}

var john = new Person("John", 30);


//challenge 13
function getPerson(name, age){
    return Person.name + " " + Person.age;
}

//challenge 14
/**Use: 
 * https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js**/
function updateTime(){
    $(document).ready(function() {
        var interval = setInterval(function() {
            var momentNow = moment();
            $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' '
                                + momentNow.format('dddd')
                                 .substring(0,3).toUpperCase());
            $('#time-part').html(momentNow.format('A hh:mm:ss'));
        }, 100);
    });
}

//challenge 15
/*
window.onload = function(){
    document.querySelector('#getDescendOrderResult').addEventListener("click", this.descendOrderStart);
}*/

function descendOrder(n){
    var s = 0; //sorted number
    //check digits from 9 to 0 in the outer loop
    for(i=9; i >= 0; i--){
        while(t>0){
            d=t%10;
            //checking for greatest digit
            if(d == i){
                s *= 10;
                s += d;
            }
            t /= 10; //decriment-quotient of every tens digit in n
        }
    return s;
    }
}

function descendOrderStart(){
    var descendOrderResult = descendOrder(document.querySelector('#DescendOrderSubmit').value);
    document.querySelector('#DescendOrderResult').value = descendOrderResult;
}