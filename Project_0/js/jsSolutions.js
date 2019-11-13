/*

This file contains funtion solutions to the 15 given JavaScript challenges. The structure of this file is as follows: the fir




*/



function fib(n){
    // if n is 0, return the zeroth Fibonacci number (0)
    // if n is 1, return the first Fibonacci number (1)
    if(n == 0){
        return 0;
    }
    else if(n == 1){
        return 1;
    }
    else{
        let nMinusOne = 1;
        let nMinusTwo = 0;
        let fibValue = 0;
        for(i = 2; i <= n; i++){
            // calculate current Fibonacci number
            fibValue = nMinusOne + nMinusTwo;
            
            // set up for next iteration of loop
            nMinusTwo = nMinusOne;
            nMinusOne = fibValue;
        }
        return fibValue;
    }
}

function bubbleSort(numArray){
    // boolean to keep track of swapping, index variables, and temporary variable to hold while swapping elements
    let swapped = true;
    let i = 0;
    let temp = 0;
    while(swapped){
        swapped = false;
        for(i = 0; i < (numArray.length - 1); i++){
            if(numArray[i] > numArray[i+1]){
                temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                swapped = true;
            }
        }
    }
    return numArray;
}


function reverseStr(someStr){
    // split the string into an array consisting of the string characters and get length of array
    let someArray = someStr.split("");
    let temp = "";

    // for loop to switch character order
    for(i = 0; i < Math.floor(someArray.length / 2); i++){
        temp = someArray[i];
        someArray[i] = someArray[(someArray.length - 1 - i)];
        someArray[(someArray.length - 1 - i)] = temp;
    }

    // join now reversed string and return
    let reversedString = someArray.join("");
    return reversedString;
}

function factorial(someNum){
    if(someNum == 1){
        return 1;
    }
    else{
        return someNum * factorial(someNum - 1);
    }
}

function substring(someStr, length, offset){
    return someStr.substring(offset, (offset + length + 1));
}

function isEven(someNum){
    if((someNum / 2) == Math.floor(someNum / 2)){
        return true;
    }
    else{
        return false;
    }
}

function isPalindrome(someStr){
    someStr.toLowerCase();
    let someStrReverse = reverseStr(someStr);
    if(someStr == someStrReverse){
        return true;
    }
    else{
        return false;
    }
}

function printShape(shape, height, character){
    var output = "";
    switch(shape){
        case "Square":
            for(i = 0; i < height; i++){
                for(j = 0; j < height; j++){
                    output += character;
                }
                output += "<br>";
            }
            return output;
        case "Triangle":
            for(i = 0; i < height; i++){
                for(j = 0; j <= i; j++){
                    output += character;
                }
                output += "<br>";
            }
            return output;
        default:
            // default case is "Diamond"
            let numBlankSpaces = 0;
            for(i = 0; i < height; i++){
                if(i < (height / 2)){
                    numBlankSpaces = Math.floor(height / 2) - i;
                }
                else{
                    numBlankSpaces = i - Math.floor(height / 2);
                }
                for(j = 0; j < numBlankSpaces; j++){
                    output += "&#160;";
                }
                for(j = 0; j < (height - numBlankSpaces * 2); j++){
                    output += character;
                }
                for(j = 0; j < numBlankSpaces; j++){
                    output += "&#160;";
                }
                output += "<br>";
            }
            console.log(output);
            return output;
    }
}

function traverseObject(someObj){
    var output = "";
    for(property in someObj){
        output += property + ": " + someObj[property] + "<br>";
    }
    return output;
}

function deleteElement(someDelArr){
    var output = "Array before deletion: [" + someDelArr.join(", ") + "]<br>Array length before deletion: " + someDelArr.length + "<br>";
    delete someDelArr[2];
    output += "Array after deletion: [" + someDelArr.join(", ") + "]<br>Array length after deletion: " + someDelArr.length;
    return output;
}

function spliceElement(someArr){
    var output = "Original array: [" + someArr.join(", ") + "]<br>Original array length: " + someArr.length + "<br>";
    someArr.splice(2, 1);
    output += "Array after splicing: [" + someArr.join(", ") + "]<br>Array length after splicing: " + someArr.length;
    return output;
}

function Person(name, age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return name;
    }
}

function getPerson(name, age){
    return {name, age};
}

function updateTime(){
    // get current time
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // add zero to values if single digit
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    var currentTime = hours + ":" + minutes + ":" + seconds;
    return currentTime;
}

function descOrder(n){
    // convert number to string to array of numbers
    let nString = n.toString();
    let nArray = [];
    for(i = 0; i < nString.length; i++){
        nArray.push(parseInt(nString[i]));
    }

    // call merge sort, return sorted array, convert back to number
    let sortedNArray = mergeSort(nArray);
    return sortedNArray.join("");
}

// simple merge sort algorithm
function mergeSort(sortArray){
    if(sortArray.length == 1){
        return sortArray;
    }
    else{
        var middleIndex = Math.floor(sortArray.length / 2);
        var firstArray = mergeSort(sortArray.slice(0, middleIndex));
        var secondArray = mergeSort(sortArray.slice(middleIndex, sortArray.length));
        var sortedArray = [];
        var firstIndex = 0;
        var secondIndex = 0;
        for(i = 0; i < (firstArray.length + secondArray.length); i++){
            if((firstArray[firstIndex] > secondArray[secondIndex]) || (secondIndex == secondArray.length)){
                sortedArray.push(firstArray[firstIndex]);
                firstIndex += 1;
            } else {
                sortedArray.push(secondArray[secondIndex]);
                secondIndex += 1;
            }
        }
        return sortedArray;
    }
}
