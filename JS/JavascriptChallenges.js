/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/

function fib(n) {
  //check first 2 special cases, then recursively add values until desired iteration num
    if(n==0)
      return 0;
    else if (n==1)
      return 1;
    else
      return fibHelper(1, 0, n-1)
}
function fibHelper(n, nprev, iter){
  if(iter>0){
    let temp=n;
    n=n+nprev;
    nprev=temp;
    return fibHelper(n,nprev,iter-1);
  }
  else
    return n;
}

/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/

function bubbleSort(numArray) {
  //sorted into descending order
  //continue checking all pairs until no swaps are made
  let sorted=false;
  while(sorted==false){
    sorted=true;
    for(i=0;i<numArray.length-1;i++)
    {
      if(numArray[i]<numArray[i+1])
      {
        let temp=numArray[i];
        numArray[i]=numArray[i+1];
        numArray[i+1]=temp;
        sorted=false;
      }
    }
  }
  return numArray;
}

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/

function reverseString(someStr) {
    let revStr="";
    for (character of someStr)
      revStr=character+revStr;
    return revStr;
}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/

function factorial(someNum) {
    return someNum*factorial(someNum-1);
}

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/

function substring(someStr, length, offset) {
  //loop through and grab every character from offset to offset+length.
  if(offset<0)
    alert('Invalid input: Offset cannot be < 0');
  else if(length<0)
    alert('Invalid input: Length cannot be < 0');
  else if(offset+length>someStr.length)
    alert('Invalid input: Offset and length is larger than string size');
  else if (offset>someStr.length-1)
    alert('Invalid input: Offset cannot be larger than string size');
  else
  {
    let subStr="";
    for(i=0;i<length;i++){
      subStr=subStr+someStr.charAt(offset+i);
    }
    return subStr;
  }
}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum) {
  //use bitwise operator to check rightmost bit. 
  //if it's 1, value is odd
    if((someNum & 1) == 0)
      return true;
    else
      return false;
}

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/

function isPalindrome(someStr) {
  //traverse from both ends of the string until center. 
  //return false if the characters in both iterators are different
  //return true if it never finds different characters
  let halflen=Math.ceil(someStr.length/2);
  for(i=0;i<halflen;i++)
    if(someStr.charAt(i)!=someStr.charAt(someStr.length-i-1))
      return false;
  return true;
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
  for(property in someObj)
    console.log(property+": "+someObj[property]);
}

/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

function deleteElement(someDelArr) {

}

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/

function spliceElement(someArr) {
    
}

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/

function Person(name, age) {

}


/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);*/

function getPerson(name, age) {

}
function UpdateTime()
{
    let day=new Date();
    document.querySelector("#timeStamp").innerHTML = day.toLocaleTimeString();
}
/*15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/

function descOrder(n) { 
  //convert to int array, send to bubble sort, then convert back to int
  if(n<0)
    alert('Invalid Input: Input cannot be negative');
  else
   return Number(bubbleSort(n.toString().split('')).join(''));
}