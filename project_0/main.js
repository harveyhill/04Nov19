var myVar = setInterval(updateTime, 1000);

///////////
//API calls
///////////
function ajaxExample1(){

    var myMusic = document.querySelector("#inputMusic").value;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            var songs = JSON.parse(this.response);
            
            var output = "<br><br>";
            for( i = 0; i < songs.results.length; i++ )
            {
                var mySong = songs.results[i].previewUrl;
                output += "<audio id='play' controls style='width: 200px;'  source src=" + mySong +" type='audio/mpeg'>not supported</audio>" + "<br>";
            }
            document.querySelector("#results").outerHTML = output;
        }
    }

    xhr.open("GET","https://itunes.apple.com/search?term=" + myMusic + "&entity=song&limit=5", true);
    xhr.send();
}


function ajaxExample2(){

    var city = document.querySelector("#inputWeather").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            var weather = JSON.parse(this.response);
            var output = "";
            var temp = "";
            var desc = "";
            desc =  weather.weather[0].description;
            
            temp = weather.main.temp;

            output = "City -> " + city + " : temp -> " + temp + " conditions -> " + desc;
            var elem = document.querySelector("#weather");
            elem.style.color = "#FFFFFF";
            elem.outerHTML = output;
            
        }
    }

    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",USA&APPID=4626ec7e0597a71b6d5ffd2257b48e07", true);
    xhr.send();
}

///////////
//JS challenges
///////////
/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/
function fib(n) {
    var fibonacci = 1;
    var prev = 1;
    var temp = 0;
    
    for(i = 1; i < (n - 1); i++)
    {      
        if(1 == n || 2 == n)
        {
            fibonacci = 1;
            break;
        }
        else
        {
            temp = fibonacci;
            fibonacci = fibonacci + prev;
            prev = temp;   
        }
    }
    return fibonacci;
}

/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/
function bubbleSort(numArray) {
    var len = numArray.length;
    var temp = 0, first = 0, second = 0;
    var sorted = false;
    
    while(! sorted)
    {
        sorted = true;
        for (i = 0; i < len; i++)
        {
                if(numArray[i] > numArray[i + 1])
                {
                    first = numArray[i];
                    second = numArray[i + 1];

                    temp = first;
                    first = second;
                    second = temp;
                    numArray[i] = first;
                    numArray[i + 1] = second;
                    sorted = false;
                }
        }
    }
    return numArray;
}

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/
function reverseString(someStr) {
    var reversed = "";
    for(i = someStr.length; i >= 0;)
    {
        reversed += someStr.charAt(i);
        i--;
    }
    return reversed;
}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/
function factorial(someNum) {
   
}

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/
function substring(someStr, length, offset) {
    var result = "";
    if(null != someStr)
    {
        try
        {
            var totalLength = offset + length;
            if( totalLength < someStr.length)
            {
                for(i = offset; i <= (offset + length); i++)
                {
                    result += someStr.charAt(i);
                }
            }
            else
            {
                alert("invalid index range");
            }
        }
        catch(Exception)
        {
            alert("please enter a valid length and offset range")
        }
    }
    else
    {
        alert(someStr + " is not a valid input value");
    }
    return result;
}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/
function isEven(someNum) {
    var result = false;
    if(0 == (someNum % 2))
    {
        result = true;
    }
    return result;
}

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/
function isPalindrome(someStr) {
    var compare = "";
    var result = false;
    for(i = someStr.length; i >= 0 ; i--)
    {
        compare += someStr.charAt(i);
    }
    if(someStr == compare)
    {
        result = true;
    }
    return result;
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
    //Code from MDN
    var result = "";
    for (let [key, value] of Object.entries(someObj)) {
        result += `${key}: ${value}` + ", \n";
      }
    return result;
      
}

/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/
function deleteElement(someDelArr) {
    var output = "length before -> " + someDelArr.length + " \n";
    delete(someDelArr[2]);
    output += "length after -> " + someDelArr.length;
    return output;
}

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/
function spliceElement(someArr) {
    var output = "length before -> " + someArr.length + " \n";
    someArr.splice(2,1);
    output += "length after -> " + someArr.length;
    return output;
}

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/
function Person(name, age) {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
    }

    var john = new Person(name,age);
    return "name : " + john._name + " age : " + john._age;
}


/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);*/

function getPerson(name, age) {
    var john = {
        x : name,
        y : age
    };
    return JSON.stringify(john);
}

/*14. Display the current time on the top right of your HTML page, 
updating every second*/
function updateTime() {
    var time = new Date();
    document.querySelector("#myTime").textContent = time.toLocaleTimeString();
}

/*15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/
function descOrder(n) {
    
    var divisor = parseInt(n);
    var remainder = 0;
    var temp = [];
    var result = "";
    
    while(divisor > 0)
    {
        remainder = divisor % 10;
        divisor = Math.floor(divisor / 10);
        temp.push(remainder);
    }
    temp = bubbleSort(temp);
    for(i = (temp.length - 1); i >= 0; i--)
    {
        result += "" + temp[i];
    }

    return result;
}

///////////////////////////////////
// Event listeners 
///////////////////////////////////
///////////
//About ME listeners
///////////

///////////
//JS challenges listeners
///////////
document.querySelector("#myFib").addEventListener("mouseover", function (e) {
    document.querySelector("#userInput").placeholder = "5";
})

document.querySelector("#myBubbleSort").addEventListener("mouseover", function (e) {
    document.querySelector("#userInput").placeholder = "55,1,34,32,6,9,8,3";
})



document.querySelector("#myFib").addEventListener("click", function (e) {
    var suggestion = document.querySelector("#userInput").placeholder;
    var input = ("" != document.querySelector("#userInput").value ? document.querySelector("#userInput").value : suggestion);
    var output = fib(parseInt(input));
    document.querySelector("#output").value = String(output);
})

document.querySelector("#myBubbleSort").addEventListener("click", function (e) {
    var suggestion = document.querySelector("#userInput").placeholder;
    var input = ("" != document.querySelector("#userInput").value ? document.querySelector("#userInput").value : suggestion);
    var trimmed = input.split(",");
    var myArray = [];
    for (x of trimmed)
    {
        myArray.push(parseInt(x));
    }
    var output = bubbleSort(myArray);
    document.querySelector("#output").value = String(output);
})

document.querySelector("#myReverseString").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var result = reverseString(input);
    document.querySelector("#output").value = String(result);
})

document.querySelector("#mySubstring").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var trimmed = input.split(",");
    var myArray = [];
    for (x of trimmed)
    {
        myArray.push(x);
    }
    var output = substring(myArray[0],parseInt(myArray[1]),parseInt(myArray[2])); 
    document.querySelector("#output").value = output;
})

document.querySelector("#myIsEven").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var result = isEven(parseInt(input));
    document.querySelector("#output").value = String(result);
})

document.querySelector("#myIsPalindrome").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var result = isPalindrome(input);
    document.querySelector("#output").value = String(result);
})

document.querySelector("#myTraverseObj").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var result = traverseObject(JSON.parse(input));
    document.querySelector("#output").value = String(result);
})

document.querySelector("#myDeleteElem").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var trimmed = input.split(",");
    var myArray = [];
    for (x of trimmed)
    {
        myArray.push(x);
    }
    var result = deleteElement(myArray);
    document.querySelector("#output").value = String(result);
})

document.querySelector("#mySplice").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var trimmed = input.split(",");
    var myArray = [];
    for (x of trimmed)
    {
        myArray.push(x);
    }
    var result = spliceElement(myArray);
    document.querySelector("#output").value = String(result);
})

document.querySelector("#myGetPerson").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var trimmed = input.split(",");
    var myArray = [];
    for (x of trimmed)
    {
        myArray.push(x);
    }
    var result = getPerson(myArray[0],myArray[1]);
    document.querySelector("#output").value = result;
})


document.querySelector("#myDescOrder").addEventListener("click", function (e) {
    var input = document.querySelector("#userInput").value;
    var result = descOrder(parseInt(input));
    document.querySelector("#output").value = result;
})



    


   
  
