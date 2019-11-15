// This function makes an API request to output love percentage
function AjaxExample()
{
    var fName = document.querySelector("#fname").value;
    var sName = document.querySelector("#sname").value;
    var request = new XMLHttpRequest();
    request.withCredentials = true;

    request.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200) {
            let lovepercentage = JSON.parse(this.response);
            
            console.log(lovepercentage.percentage);
            console.log(lovepercentage.result);
            document.querySelector("#percentage").innerHTML = lovepercentage.percentage;
            document.querySelector("#result").innerHTML = lovepercentage.result;
        }
    }
    request.open("GET", "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + fName + "&sname=" + sName, true);
    request.setRequestHeader("x-rapidapi-host", "love-calculator.p.rapidapi.com");
    request.setRequestHeader("x-rapidapi-key", "db3de8bba2msha1591ac50b819d3p1aebe8jsnb9def6330cb9");
    request.send();
}

// This function changes the contents of the table in the about me page
function ChangeTable(tableNumber)
{ 
    
    if (tableNumber == 1)
    {
        // Changing the subheading and the table heading
        document.querySelector("#headervar").textContent = "Favorite Movies";
        document.querySelector("#head1").textContent = "Movie Name";
        document.querySelector("#head2").textContent = "Genre";
        document.querySelector("#head3").textContent = "Starring Actor";

        // Changing contents of the table body
        document.querySelector("#row1col1").textContent = "Deadpool";
        document.querySelector("#row1col2").textContent = "Comedy / Superhero";
        document.querySelector("#row1col3").textContent = "Ryan Renolds";

        document.querySelector("#row2col1").textContent = "Spiderman: Into the Spiderverse";
        document.querySelector("#row2col2").textContent = "Superhero";
        document.querySelector("#row2col3").textContent = "Shameik Moore";

        document.querySelector("#row3col1").textContent = "Mad Max Fury Road";
        document.querySelector("#row3col2").textContent = "Action / Adventure";
        document.querySelector("#row3col3").textContent = "Tom Hardy";
    }
    else if (tableNumber == 2)
    {
         // Changing the subheading and the table heading
         document.querySelector("#headervar").textContent = "Favorite TV Shows";
         document.querySelector("#head1").textContent = "TV Show Name";
         document.querySelector("#head2").textContent = "Genre";
         document.querySelector("#head3").textContent = "Starring Actor";
 
         // Changing contents of the table body
         document.querySelector("#row1col1").textContent = "Game of Thrones";
         document.querySelector("#row1col2").textContent = "Fantasy / Adventure";
         document.querySelector("#row1col3").textContent = "Sean Bean";
 
         document.querySelector("#row2col1").textContent = "Agents of Shield";
         document.querySelector("#row2col2").textContent = "Action / Superhero";
         document.querySelector("#row2col3").textContent = "Clark Gregg";
 
         document.querySelector("#row3col1").textContent = "Rick and Morty";
         document.querySelector("#row3col2").textContent = "Comedy / Cartoon";
         document.querySelector("#row3col3").textContent = "Justin Roiland";
    }
    else if (tableNumber == 3)
    {
         // Changing the subheading and the table heading
         document.querySelector("#headervar").textContent = "Favorite Sports Teams";
         document.querySelector("#head1").textContent = "Sport";
         document.querySelector("#head2").textContent = "Team Name";
         document.querySelector("#head3").textContent = "Favorite Player";
 
         // Changing contents of the table body
         document.querySelector("#row1col1").textContent = "Baseball";
         document.querySelector("#row1col2").textContent = "Philadelphia Phillies";
         document.querySelector("#row1col3").textContent = "Chase Utley";
 
         document.querySelector("#row2col1").textContent = "Football";
         document.querySelector("#row2col2").textContent = "Tennessee Titans";
         document.querySelector("#row2col3").textContent = "Kevin Byard";
 
         document.querySelector("#row3col1").textContent = "Hockey";
         document.querySelector("#row3col2").textContent = "Nashville Predators";
         document.querySelector("#row3col3").textContent = "Roman Josi";
    }
}

// This function triggers the fib() function to start and then inserts the answer
function FibStart()
{
    if (!document.querySelector("#fibnum").value)
    {
        window.alert("Please enter a Numeric Value.");
    }
    else if (isNaN(document.querySelector("#fibnum").value))
    {
        window.alert("Please enter a Numeric Value.");
    }
    else
    {
        var fibResult = Fib(document.querySelector("#fibnum").value);
        document.querySelector("#fibans").textContent = fibResult;
    }
}

// This function returns the nth number of the fibonacci sequence
function Fib(n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;
    return Fib(n - 1) + Fib(n - 2);
}

// This function takes in inputs from the textboxes and sorts those
function ReturnBubbleSort()
{
    // check to see if values are input correctly
    if (!document.querySelector("#sort1").value || !document.querySelector("#sort2").value || !document.querySelector("#sort3").value || !document.querySelector("#sort4").value || !document.querySelector("#sort5").value)
    {
        window.alert("Please enter numbers into each field.");
    }
    else if (isNaN(document.querySelector("#sort1").value) || isNaN(document.querySelector("#sort2").value) || isNaN(document.querySelector("#sort3").value) || isNaN(document.querySelector("#sort4").value) || isNaN(document.querySelector("#sort5").value))
    {
        window.alert("Please enter numbers into each field.");
    }
    else
    {
        // Take in numbers into an array
        let bubbleSortArray = [parseInt(document.querySelector("#sort1").value), parseInt(document.querySelector("#sort2").value),parseInt(document.querySelector("#sort3").value), parseInt(document.querySelector("#sort4").value), parseInt(document.querySelector("#sort5").value)];

        // Call BubbleSort Function
        bubbleSortArray = BubbleSort(bubbleSortArray);
        
        // insert resultArray into textboxes
        document.querySelector("#sortans1").textContent = bubbleSortArray[0];
        document.querySelector("#sortans2").textContent = bubbleSortArray[1];
        document.querySelector("#sortans3").textContent = bubbleSortArray[2];
        document.querySelector("#sortans4").textContent = bubbleSortArray[3];
        document.querySelector("#sortans5").textContent = bubbleSortArray[4];
    }
}
// This function sorts an array from lowest to highest
function BubbleSort(sortArray)
{
    let n = sortArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n; i++) 
        {
            if (sortArray[i] > sortArray[i + 1]) 
            {
                let temp = sortArray[i];
                sortArray[i] = sortArray[i + 1];
                sortArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return sortArray;
}

// This function takes inputs runs it through the reverse string function and sends output
function ReturnReverseString()
{
    // check to see if values are input correctly
    if (!document.querySelector("#string1").value)
    {
        window.alert("Please enter a String.");
    }
    else
    {
        var string1 = document.querySelector("#string1").value;
        string1 = ReverseString(string1);
        document.querySelector("#revstring1").textContent = string1;
    }
}

// This function takes a string splits it into an array reverses it then puts the result back into a string
function ReverseString(someString)
{
    var splitString = someString.split("");
    var reverseArray = splitString.reverse();
    var reverseString = reverseArray.join("");
    return reverseString;
}

// This function takes in inputs runs the string through the substring function and sends output
function ReturnSubstring()
{
    if (!document.querySelector("#string2").value || !document.querySelector("#stringlength").value || !document.querySelector("#offset").value)
    {
        window.alert("Please enter values into the fields.");
    }
    else if (isNaN(document.querySelector("#stringlength").value) || (isNaN(document.querySelector("#offset").value)))
    {
        window.alert("Please enter numbers into the length and offset fields.");
    }
    else
    {
        var string = document.querySelector("#string2").value;
        
        // offset is the beginging of the new word or cutoff
        var offset = parseInt(document.querySelector("#offset").value);
        var n = parseInt(document.querySelector("#stringlength").value);
        let newString = Substring(string, n, offset);

        document.querySelector("#substring1").textContent = newString;
    }
}

// This function uses the substring method to return a substring
function Substring(someString, length, offset)
{
    return someString.substring(offset, (length + offset));
}

// This function takes in input, runs the isEven function, and sends output
function ReturnIsEven()
{
    if (!document.querySelector("#num1").value)
    {
        window.alert("Please Enter a number.");
    }
    else if (isNaN(document.querySelector("#num1").value))
    {
        window.alert("Please Enter a number.");
    }
    else
    {
        let num = document.querySelector("#num1").value;
        let result = IsEven(num);
        document.querySelector("#numans").textContent = result;
    }
}

// This function uses recursion to return false for odd, true for even
function IsEven(n)
{
    if (n == 0)
    {
        return true;
    }
    else if (n == 1)
    {
        return false;
    }
    else if (n < 0)
    {
        return IsEven(-n);
    }
    else
    {
        return IsEven(n - 2);
    }
}

// This function prints a shape into the console, the diamond shape doesnt work
function PrintShape(shape, height, char)
{
    var line = "";
    switch (shape)
    {
        case "Square":
            console.log("Square:");
            // Create the line       
            for (var i = 0; i < height; i++)
            {
                line = "";
                for (var j = 0; j < height; j++)
                {
                    line = line + char;
                }
                console.log(line);
            }
            break;
        case "Triangle":
            console.log("Triangle:");
            for (var i = 0; i < height; i++)
            {
                line = line + char; 
                for (var j = 0; j < height; j++)
                {
                    console.log(line);
                }
            }
            break;
        // Doesnt work
        case "Diamond":
            var cutoff = Math.floor(height / 2);
            for (i = 1; i <= cutoff; i++)
            {
                line = "";
                for (j = 0; j < cutoff; j++)
                {
                line = line + " ";
                }

                for (k = 0; k < i; k++)
                {
                line = line + char;
                }

                for (l = 0; l < cutoff; l++)
                {
                line = line + " ";
                }
                cutoff--;
                console.log(line);
            }

            line = "";
            for (i = 0; i < cutoff + 1; i++)
            {
                line = line + char;
            }
            console.log(line);

            line = "";
            for (i = 1; i <= cutoff; i++)
            {

            }
            break;
        /* default:
            console.log("Not a Shape"); */
    }
}

// This function takes in the shape type and runs it through the shape function
function ReturnShape()
{
    if (!document.querySelector("#shape").value || !document.querySelector("#height").value || !document.querySelector("#char").value)
    {
        window.alert("Please enter values into the fields.")
    }
    else if (isNaN(document.querySelector("#height").value))
    {
        window.alert("Please enter a number into the height field.")
    }
    else 
    {
        let shape = document.querySelector("#shape").value;
        let hieght = document.querySelector("#height").value;
        let char = document.querySelector("#char").value;
        document.querySelector("#shaperesult").textContent = PrintShape(shape, hieght, char);
    }
}

// Thsi function takes in a string runs it through the palindrome funciton and sends the output
function ReturnPalindrome()
{
    if (!document.querySelector("#string3").value)
    {
        window.alert("Please Enter a String");
    }
    else
    {
        let string1 = document.querySelector("#string3").value;

        document.querySelector("#palans").textContent = IsPalindrome(string1);
    }
}

// This function returns true if the string is a palindrome, false if not
function IsPalindrome(string)
{
    var re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    var n = string.length;
    for (var i = 0; i < n / 2; i++) 
    {
        if (string[i] !== string[n - 1 - i]) 
        {
        return false;
        }
    }
    return true;
}

// This function takes in a number, sends it through the factorial function, then sends output
function ReturnFactorial()
{
    if (!document.querySelector("#num2").value)
    {
        window.alert("Please enter a number.");
    }
    else if (isNaN(document.querySelector("#num2").value))
    {
        window.alert("Please enter a number.");
    }
    else
    {
        let n = document.querySelector("#num2").value;
        document.querySelector("#facans").textContent = Factorial(n);
    }
}

// This function uses recursion to find the result of n times every number before n
function Factorial(number)
{
    if (number <= 0) 
    {
        return 1;
    } 
    else 
    {
        return (number * Factorial(number - 1));
    }
}

// this functions takes in a name and age and creates an object
function ReturnPerson()
{
    if (!document.querySelector("#name").value || !document.querySelector("#age").value)
    {
        window.alert("Please Enter a name and age.");
    }
    else if (isNaN(document.querySelector("#age").value))
    {
        window.alert("Please enter a number for the age field.");
    }
    else
    {
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;
        window.alert(name);
        window.alert(age);
        console.log(GetPerson(name, age));
        window.alert("The object was created successfully");
    }
}

// This function takes in the name and age of a person and creates an object literal
function GetPerson(name, age)
{
    let person = {
        Name : name,
        Age : age
    }
    return person;
}

// This function creates an object
function Person(name, age)
{
    this.Name = name;
    this.Age = age;
    
    return this.Person;
}

// This function creates an object
function ReturnPerson2()
{
    if (!document.querySelector("#name2").value || !document.querySelector("#age2").value)
    {
        window.alert("Please enter a name and age.");
    }
    else if (isNaN(document.querySelector("#age2").value))
    {
        window.alert("Please enter a number for the age field.");
    }
    else
    {
        let name = document.querySelector("#name2").value;
        let age = document.querySelector("#age2").value;
        let person = new Person(name, age);
        console.log(person);
        window.alert("The object was created successfully");
    }
}

// This function updates and sets the time every second
window.setInterval(function StartTime() 
{
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    if (hour > 12)
    {
        hour = hour - 12;
    }
    if (minutes < 10 && seconds < 10)
    {
        document.querySelector("#time").textContent = hour + ": 0" + minutes + ": 0" + seconds;
    }
    else if (minutes < 10 && !seconds < 10)
    {
        document.querySelector("#time").textContent = hour + ": 0" + minutes + ": " + seconds;
    }
    else if (!minutes < 10 && seconds < 10)
    {
        document.querySelector("#time").textContent = hour + ": " + minutes + ": 0" + seconds;
    }
    else
    {
        document.querySelector("#time").textContent = hour + ": " + minutes + ": " + seconds;
    }
}, 500);

// This function creates a random array and sends the resulting array along with the length of the array
function ReturnCreatedArray(type)
{
    let newArray = CreateArray();
    if (type == "Delete")
    {
        //Print array
        document.querySelector("#delarray1_1").textContent = newArray[0];
        document.querySelector("#delarray1_2").textContent = newArray[1];
        document.querySelector("#delarray1_3").textContent = newArray[2];
        document.querySelector("#delarray1_4").textContent = newArray[3];
        document.querySelector("#delarray1_5").textContent = newArray[4];
        document.querySelector("#delarraylength1").textContent = newArray.length;

        let delArray = DeleteElement(newArray);
        //Print updated array
        document.querySelector("#delarray2_1").textContent = delArray[0];
        document.querySelector("#delarray2_2").textContent = delArray[1];
        document.querySelector("#delarray2_3").textContent = delArray[2];
        document.querySelector("#delarray2_4").textContent = delArray[3];
        document.querySelector("#delarray2_5").textContent = delArray[4];
        document.querySelector("#delarraylength2").textContent = delArray.length;
    }
    else if (type == "Splice")
    {
        //Print array
        document.querySelector("#splarray1_1").textContent = newArray[0];
        document.querySelector("#splarray1_2").textContent = newArray[1];
        document.querySelector("#splarray1_3").textContent = newArray[2];
        document.querySelector("#splarray1_4").textContent = newArray[3];
        document.querySelector("#splarray1_5").textContent = newArray[4];
        document.querySelector("#splarraylength1").textContent = newArray.length;

        let splArray = SpliceElement(newArray);
        //Print updated array
        document.querySelector("#splarray2_1").textContent = splArray[0];
        document.querySelector("#splarray2_2").textContent = splArray[1];
        document.querySelector("#splarray2_3").textContent = splArray[2];
        document.querySelector("#splarray2_4").textContent = splArray[3];
        document.querySelector("#splarray2_5").textContent = splArray[4];
        document.querySelector("#splarraylength2").textContent = splArray.length;
    }
}

// This function creates an array filled with random numbers
function CreateArray()
{
    let array = [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)];

    return array;
}

// This function deletes the 3rd spot in the array and leaves it undefined
function DeleteElement(someArray)
{
    delete someArray[2];
    return someArray;
}

// This function deletes the 3rd spot in the array
function SpliceElement(someArray)
{
    someArray.splice(2, 1);
    return someArray;
}

// This function takes a positive number, runs it through the DescOrder function and sends the output
function ReturnDescOrder()
{
    if (!document.querySelector("#desnum").value)
    {
        window.alert("Please enter a number");
    }
    else if (isNaN(document.querySelector("#desnum").value))
    {
        window.alert("Please enter a positive integer");
    }
    else if (document.querySelector("#desnum").value < 0)
    {
        window.alert("Please enter a positive integer");
    }
    else
    {
        let num = parseInt(document.querySelector("#desnum").value);
        num = DescOrder(num);
        document.querySelector("#desnum2").textContent = num;
    }
}

// This function takes in a number and returns the highest possible number based on it's digits
function DescOrder(n)
{   
    let string = n.toString();
    let orderArray = string.split("").map(Number);
    let newArray = BubbleSort(orderArray);
    newArray = newArray.reverse();
    string = newArray.join("");
    return string;
}