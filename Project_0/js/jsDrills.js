
// string.reverse()
// string.split()
// string.join()

//explain data model for a hospital ERD

/* 
	JavaScript Challenges
	
	* Complete 10 of the 15 listed functions.
	* You may choose which ones you complete, but it is recommend you attempt them all.
	
	* The input and result of these functions must be on a html page.
	* You must be able to explain your process for all of the functions you write.
	
	Scoring
		Each successful function is worth 10%.
		Partial success is worth 5%. (e.g. function successfully runs, but logic is incorrect and results in incorrect results.)
*/




/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/

function fib(n) {
    var total;
    var laterNum = 0;
    var closerNum = 1;
    var answer;
    switch(n){
        case(n==0):
            answer = 0;
            console.log(answer)
            break;
        case(n==1):
            answer = 1;
            console.log(answer)
            break;
        default:
            if(n>0){
                do{
                    total = laterNum + closerNum;
                    console.log(total);
                    laterNum = closerNum;
                    answer = closerNum;
                    closerNum = total;
                    n--;

                }while(n>0);
                console.log("\n    ANSWER: " + answer)
            }
    }
}

/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/

function bubbleSort(numArray) {
    var check;
    var n = numArra.length-1;
    var f=numArra;
    do {


        check = false;
        for (var i=0; i < d; i++)
        {
            if (f[i] < f[i+1])
            {
               var temp = x[i];
               f[i] = f[i+1];
               f[i+1] = temp;
               check = true;
            }
        }
        d = d - 1;
    } while (check);

 return x; 
}

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/

function reverseString(someStr) {

// string.reverse()
// string.split()
// string.join()

return someStr.split("").reverse().join("");
//check with console log
//return to DOM

}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/

function factorial(someNum) {
        if (someNum <= 1) // base case
            return 1;
        else    
            return someNum*factorial(someNum-1);    
    
}

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/

function substring(someStr, length, offset) {
    var a = someStr.split("");
    var ans ='';
    for (i = offset; i < (length+offset); i++){
        ans += a[i].value;
    }
    console.log(ans);
}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum) {
    if(someNum % 2==0){return "true"}else{ return "false"}
    //implement answer to DOM
}

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/

function isPalindrome(someStr) {
    //Input string
    if(someStr == someStr.split("").reverse().join("")){
        return "true"
    }else{
        return "false"
    }
}

/*8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * */

function printShape(shape, height, character) {

}

/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.*/

function traverseObject(someObj) {
    for(obj of this){
        return obj.value;
    }
}

/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

function deleteElement(someDelArr) {

    //Print length

    //Delete the third element in the array.
    
    //Print length
}

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/

function spliceElement(someArr) {
    //assume someArr is array
    console.log(someArr.length)
    var nth;
    nth= someArr.length;
    var arr = new Array(nth-1);
    let counter = 0
    for(n of someArr.length){
        //check that iteratoin is not the third element of someArr
        if (n!=2){
            arr[counter]=someArr[n];
            //each iteration, add counter
            counter++;
        }
    }
    console.log(arr.length)
}

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/

function Person(name, age) {
    this.n = name;
    this.a = age;
}


/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);*/

function getPerson(name, age) {
return this.n;
return this.a;
/*var myObject = {
    Name: name,
    Age: age
};*/
}

/*14. Display the current time on the top right of your HTML page, 
updating every second*/

function updateTime() {
    console.log(Date());
    
    
    var d = new Date();
    return d;
    //for now just show show time until DOM is referenced
    //use return for DOM

}

/*`15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/

function descOrder(n) {
    //figure out sort funciton
    //then take "n" as a String, split it, then sort it (from smallest to largest), reverse the order, then join it
    console.log(String(n).split("").sort().reverse().join(""))
}