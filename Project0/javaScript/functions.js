
//*1.Fibonacci 
function fibonacci(fib) {
    var i = 0;
    let add = 0;
    fibonacci_Array = [0, 1];
    let first_fib = 0;
    let sec_fib = 1;
    if(isNaN(fib))
    {
        window.alert("Please Enter any Number");
    }
    else{
   
    do {
        add = first_fib + sec_fib;
        first_fib = sec_fib;
        sec_fib = add;
        fibonacci_Array.push(add);
        i = add;
    } while (i <= fib);
    document.querySelector("#fibonacci_numbers").innerHTML = fibonacci_Array;}
}
//------------------------------------------------------------

//*2. Bubble Sort
numArray=[];
function PushNumber(num){
    
    if(isNaN(num))
    {
        window.alert("Please Enter any Number");
    }
    else{
    numArray.push(num);
}
}

function bubbleSort(){ 
    //console.log("is this global "+window.numArray);
    for(i=0; i<=numArray.length-1; i++){
        for(j=i+1; j<=numArray.length-1; j++){
        let initial_value;
      if(numArray[i]>numArray[j]){
        initial_value=numArray[i];
            numArray[i]=numArray[j];
            numArray[j]=initial_value;
        
        }// end of if 
    }// end of inner for
   }// end of outer for loop
document.querySelector("#SortedNumbers").innerHTML=numArray;

}// end of function

//____________________________________________

//*3.  Reverse string
function ReverseString(name){
    let reverse_name=" ";
    for(j=name.length-1; j>=0; j--){
     reverse_name+=(name[j]);
    }
    document.querySelector("#reverseName").innerHTML=reverse_name;
    }

  //--------------------------------------------------------
  
//*4. factorial 
function factorial(number)
{
    if(number!=1){
        number=number*factorial(number-1);

    }
     return number;
 //document.querySelector("#FactorailNumber").innerHTML=parseInt(number);
}
//----------------------------------

//*5 Palindrome
function  isPalindrome(str){
//str="pettep";
let str_length=str.length-1;
    for(i=0; i<=(str.length)/2; i++)
    {
        if(str[i]==str[str_length-i]  && (str.length-i)>=0) {  
        return true;
        }
    else 
    {
return false;    }
    }
}
  
//-------------------------------
//*6 checking even no without %
function isEven(someNum){

    someNum1=Math.round(someNum/2);
    console.log(someNum1);
    someNum1=someNum1*2;
    if(someNum==someNum1){
        return true;

    }
    else
    {return false;}

}
//__________________________________________________________________-
//* 7  Current Time
    function updateTime() {  
        const ONE_SECOND_IN_MILLI_SECONDS=1000;    
document.querySelector("#time_result").innerHTML=new Date().toTimeString();
        settimeout(updateTime,ONE_SECOND_IN_MILLI_SECONDS);
    }
    //_____________________________________________________________
//*8    SubString

function substring(someStr, length, offset) {

    
    if (someStr == null || someStr.length == 0) {
        alert("Passed string is empty");
        return "";
    }
     
    else if(isNaN(length) || !Number.isInteger(Number(length)) ){
        alert("Passed length needs to be numeric integer");
        return "";
    }
    else if(isNaN(offset) || !Number.isInteger(Number(offset)) ){
        alert("Passed offset needs to be numeric integer");
        return "";
    } 

      
    else if (someStr.length < length) {
        alert("Passed string has lesser data than requested length (number of characters)");
        return "";
    }
    else if (parseInt(offset) < 0){
        alert("Wrong Offset - can't be < 0");
        return "";
    }
    
    else if (parseInt(offset) >= someStr.length){
        alert("Wrong Offset - can't be >= total length of passed string");
        return "";
    }
    else if ( (parseInt(offset) + parseInt(length)) > someStr.length){
        alert("Offset and desired length is more than total string length");
        return "";
    }
    
    else if ( ( parseInt(offset) + parseInt(length) ) >= someStr.substring(parseInt(offset).length)){
        alert("Passed string does not contain desired length of sub string ");
        return "";
    }
    
    else {
       // return(someStr.substring(parseInt(offset), (parseInt(length)+parseInt(offset))) );
       document.querySelector('#substring').innerHTML=(someStr.substring(offset, (parseInt(offset)+parseInt(length)))) ;

    }
}



//*9.  Descending order
function descOrder(n) {
    console.log("value of n "+n);
    if(isNaN(n) || parseInt(n) < 0){
        window.alert("Passed data is negative integer");
        return "";
    }
    else {
        var numberString = ""+n;
        var retStr = ""; 
        for (i = 9; i>=0; i--) {
           if (numberString.indexOf((i+""))>=0) {
                for (k=0; k<numberString.length; k++){
                    if (parseInt(numberString.charAt(k)) == i  ){
                        retStr = (retStr+numberString.charAt(k));
                    }
                }
            }
        }
    document.querySelector("#ReturnNumber").innerHTML=retStr;
     // return retStr;
    }
}

function spliceElement(arr) {

    alert(arr.length);
    arr.splice(2,1);// deleteing third elemet
    alert(arr.length);
    alert(arr.toString());
    }
    
    function deleteElement(ar) {
        alert( ar.length );
        delete ar[2]; 
            alert( ar.length ); 
    }