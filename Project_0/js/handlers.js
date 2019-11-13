function changeClass(){
    // get div element holding javascript challenge solutions
    var enclosingDiv = document.querySelector("div[id='jsSolutionDisplay']");
    var dropDown = enclosingDiv.querySelector("select[id='jsSolutionDropDown']");
    var dropDownIndex = dropDown.selectedIndex;
    for(i = 0; i < 16; i++){
        if(i == dropDownIndex){
            enclosingDiv.querySelector(String("div[id='" + dropDown[i].value + "']")).style.display = "block";
        }
        else{
            enclosingDiv.querySelector(String("div[id='" + dropDown[i].value + "']")).style.display = "none";
        }
    }
}

function fibHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='fibonacci']");
    // catch non-numbers, floats, and negatives and return alert
    var fibNum = parseInt(enclosingDiv.querySelector("input[name='fibNum']").value);
    var fibNumFloat = parseFloat(enclosingDiv.querySelector("input[name='fibNum']").value);
    if(((!fibNum) || (fibNum != fibNumFloat)) || (fibNum < 0)){
        alert("You must enter a positive whole number!");
        return;
    }

    // otherwise, call fib with value fibNum from input box and output returned value to page
    else{
        var fibValue = fib(enclosingDiv.querySelector("input[name='fibNum']").value);
        var output = document.createElement("p");
        output.className = "output";
        output.innerHTML = String("Fibonacci number " + String(fibNum) + " is " + String(fibValue) + ".");
        enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
    }
}

function bubHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='bubble']");
    
    // catch incorrect input and return alert
    var bubString = enclosingDiv.querySelector("input[name=bubArray]").value;
    var bubArray = bubString.split(",");
    for(i = 0; i < bubArray.length; i++){
        bubArray[i] = bubArray[i].trim();
        if(bubArray[i].indexOf(" ") != -1){
            alert("Numbers must be comma-separated!");
            return;
        }
        bubArray[i] = parseInt(bubArray[i]);
        if(!bubArray[i]){
            alert("Incorrect input!");
            return;
        }
    }
    
    // otherwise, call bubbleSort and return sorted array
    bubArray = bubbleSort(bubArray);
    bubString = "[" + bubArray.join(", ") + "]";
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = String("The sorted array is " + bubString + ".");
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function revHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='reverse']");
    var unRev = enclosingDiv.querySelector("input[name='unreversedString']").value;

    // check for empty string
    if(!unRev){
        alert("You must enter a non-empty string!");
        return;
    }
    
    // call reverseString and return reversed string
    var rev = reverseStr(unRev);
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = String("The reversed string is " + rev + ".");
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function factHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='factorial']");

    // catch errors and return alert
    try{
        var factNum = parseInt(enclosingDiv.querySelector("input[name='factNum']").value);
    }
    catch(e){
        alert("You must enter a positve whole number!");
        return;
    }
    var factNumFloat = parseFloat(enclosingDiv.querySelector("input[name='factNum']").value);
    if(((!factNum) || (factNum != factNumFloat)) || (factNum < 0)){
        alert("You must enter a positive whole number!");
        return;
    }

    // otherwise, call factorial with value factNum from input box and output returned value to page
    else{
        var factValue = factorial(factNum);
        var output = document.createElement("p");
        output.className = "output";
        output.innerHTML = String("The factorial of " + String(factNum) + " is " + String(factValue) + ".");
        enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
    }
}

function subHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='substring']");

    // catch errors (empty string, no offset, no length, float length, float offset, negative length, negative offset, offset + length greater than string length) and return alert
    var superString = enclosingDiv.querySelector("input[name='superString']").value;
    var length = parseInt(enclosingDiv.querySelector("input[name='subLength']").value);
    var offset = parseInt(enclosingDiv.querySelector("input[name='offset']").value);
    var lengthFloat = parseFloat(enclosingDiv.querySelector("input[name='subLength']").value);
    var offsetFloat = parseFloat(enclosingDiv.querySelector("input[name='offset']").value);
    if(superString == ""){
        alert("Incorrect input; please enter a non-empty string.");
    }
    else if((!length || (length <= 0)) || (length != lengthFloat)){
        alert("Incorrect input; please enter a positive whole number for the length of the substring.");
    }
    else if((!offset && (offset != 0)) ||  ((offset < 0) || (offset != offsetFloat))){
        alert("Incorrect input; please enter an integer greater than or equal to 0 for the offset value.");
    }
    else if((length + offset) > superString.length){
        alert("Incorrect input; the sum of offset and length cannot be greater than the length of the string.");
    }
    else{
        // otherwise, call substring with values from input boxes and output returned value to page
        var substr = substring(superString, length, offset);
        var output = document.createElement("p");
        output.className = "output";
        output.innerHTML = String("The substring is " + substr + ".");
        enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
    }
}

function evenHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='even']");

    // catch errors and return alert
    var evenNum = parseInt(enclosingDiv.querySelector("input[name='findEven']").value);
    var evenNumFloat = parseFloat(enclosingDiv.querySelector("input[name='findEven']").value);
    if(!evenNum){
        alert("You must enter a number!");
        return;
    }
    // otherwise, call isEven with value from input box and output returned result to page
    var evenResult = isEven(evenNum);
    var output = document.createElement("p");
    output.className = "output";
    if(evenNum != evenNumFloat){
        output.innerHTML = String(String(evenNumFloat) + " is not even.");
    }
    else if(!evenResult){
        output.innerHTML = String(String(evenNum) + " is not even.");
    }
    else{
        output.innerHTML = String(String(evenNum) + " is even.");
    }
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function palHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='palindrome']");

    // catch errors (empty string, no offset, no length, float length, float offset, negative length, negative offset, offset + length greater than string length) and return alert
    var palTest = enclosingDiv.querySelector("input[name='isPalindrome']").value;
    if(palTest == ""){
        alert("Incorrect input; please enter a non-empty string.");
        return;
    }
    
    // otherwise, call isPalindrome with values from input boxes and output returned value to page
    var isPal = isPalindrome(palTest);
    var output = document.createElement("p");
    output.className = "output";
    if(isPal){
        output.innerHTML = String("The string " + palTest + " is a palindrome.");
    }
    else{
        output.innerHTML = String("The string " + palTest + " is not a palindrome.");
    }
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function shapeHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='shape']");

    /* there is no error testing for incorrect input in this function for the following reasons:
        - the shape is chosen through a drop-down menu and thus cannot have an incorrect input
        - the instructions say to assume that the height of the shape is an odd number
        - the character is input in a text box that only accepts one character
    */

    // get chosen shape, height, and character
    var shapeIndex = enclosingDiv.querySelector("select[id='shapeDropDown']").selectedIndex;
    var shapeType = ""
    switch(shapeIndex){
        case 1:
            shapeType = "Square";
            break;
        case 2:
            shapeType = "Diamond";
            break;
        default:
            shapeType = "Triangle";
    }
    var shapeHeight = parseInt(enclosingDiv.querySelector("input[name='shapeHeight']").value);
    var shapeChar = enclosingDiv.querySelector("input[name='shapeChar']").value;
    
    // call printShape and output result to page
    var shapeString = printShape(shapeType, shapeHeight, shapeChar);
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = shapeString;
    output.style.whiteSpace = "pre";
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function returnLitHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='returnLiteral']");

    // check for incorrect input - no opening or closing braces
    var objLiteral = enclosingDiv.querySelector("input[name='objectLiteral']").value;
    if((objLiteral[0] != "{") || (objLiteral[objLiteral.length - 1] != "}")){
        alert("You must enter opening and closing braces!");
        return;
    }
    // traverse through input string to create object and add properties
    var searchIndex = 0;
    var colonIndex = 0;
    var numColons = 0;
    var inputObj = {};
    var objLiteralArr = [];
    objLiteral = objLiteral.substring(1, objLiteral.length - 1);
    objLiteralArr = objLiteral.split(",");
    for(i = 0; i < objLiteralArr.length; i++){
        // check for incorrect input - nothing before or after colon in property-value pair
        objLiteralArr[i] = objLiteralArr[i].trim();
        if((objLiteralArr[i].indexOf(":") <= 0) || (objLiteralArr[i].indexOf(":") == (objLiteralArr[i].length - 1))){
            alert("You must enter object properties in the form property:value!");
            return;
        }

        // check for incorrect input - no commas separating property-value pairs
        while((searchIndex < objLiteralArr[i].length) && (searchIndex >= 0)){
            searchIndex = objLiteralArr[i].indexOf(":", searchIndex + 1);
            if(searchIndex != -1){
                colonIndex = searchIndex;
                numColons += 1;
            }
        }
        if(numColons > 1){
            alert("Property-value-pairs must be separated by commas!");
            return;
        }

        // separate property and value pairs, trim whitespace, and add to object
        let property = objLiteralArr[i].substring(0, colonIndex);
        property = property.trim();
        let propertyValue = objLiteralArr[i].substring(colonIndex + 1);
        propertyValue = propertyValue.trim();
        // if it's a string, trim the additional quotation marks
        if(propertyValue[0] == "\""){
            propertyValue = propertyValue.substring(1, propertyValue.length - 1);
        }
        // if it's not a string, store it as a number
        else{
            propertyValue = parseFloat(propertyValue);
        }
        inputObj[property] = propertyValue;
        // reset values
        colonIndex = 0;
        searchIndex = 0;
        numColons = 0;
        property = "";
        value = "";
    }

    // call traverseObject and output result to page
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = traverseObject(inputObj);
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function delHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='delete']");

    // get array and test for incorrect input
    var inputString = enclosingDiv.querySelector("input[name='undeletedArr']").value;
    var inputArr = inputString.split(",");
    if(inputArr.length < 3){
        alert("The array must have a length greater than or equal to three!");
        return;
    }
    
    // otherwise, call deleteElement and print output to page
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = deleteElement(inputArr);
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function spliceHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='splice']");

    // get array and test for incorrect input
    var inputString = enclosingDiv.querySelector("input[name='unspliceArr']").value;
    var inputArr = inputString.split(",");
    if(inputArr.length < 3){
        alert("The array must have a length greater than or equal to three!");
        return;
    }
        
    // otherwise, call deleteElement and print output to page
    var output = document.createElement("p");
    output.className = "output";
    output.innerHTML = spliceElement(inputArr);
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}

function constructHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='defineConstructor']");

    // get string input and test for errors
    var inputString = enclosingDiv.querySelector("input[name='constructorCall']").value;
    if(inputString.substring(0, 4) != "var "){
        alert("Incorrect input; you must declare a variable to which to assign the object!");
        return;
    }
    var equalsIndex = inputString.indexOf("=");
    if(equalsIndex == -1){
        alert("Incorrect input; your statement must include an equals sign for assignment!");
        return;
    }
    else if((inputString.substring(equalsIndex - 1, equalsIndex + 13)) != " = new Person("){
        alert("Incorrect input!");
        return;   
    }
    else if((inputString.substring(inputString.length - 2)) != ");"){
        alert("Incorrect input!");
        return;
    }

    var firstQuote = inputString.indexOf("\"");
    var secondQuote = inputString.indexOf("\"", firstQuote + 1);
    var nameValue = inputString.substring(firstQuote + 1, secondQuote);

    var comma = inputString.indexOf(",");
    var rightParenth = inputString.indexOf(")");
    var ageValue = inputString.substring(comma + 1, rightParenth);
    ageValue.trim();
    ageValue = parseFloat(ageValue);

    var equals = inputString.indexOf("=");
    var assignedVar = inputString.substring(4, equals);
    assignedVar = assignedVar.trim()

    var objOfObj = {assignedVar: getPerson(nameValue, ageValue)};
    console.log(JSON.stringify(objOfObj.assignedVar));


    console.log(nameValue, ageValue, assignedVar);


}

function timeHandler(){
    // get div element holding all of solution specific elements
    var body = document.querySelector("body");

    // call timeUpdate and print output to page
    var output = document.createElement("div");
    output.setAttribute("id", "time");
    output.style.cssFloat = "right";
    output.innerHTML = updateTime();
    body.replaceChild(output, body.querySelector("div[id='time']"));
}

function descHandler(){
    // get div element holding all of solution specific elements
    var enclosingDiv = document.querySelector("div[id='descendOrder']");

    // check for incorrect input and return alert
    var unordered = enclosingDiv.querySelector("input[name='unorderedNum']").value;
    unordered = unordered.trim();
    if(unordered.indexOf(" ") != -1){
        alert("There cannot be spaces in the inputted number!");
        return;
    }
    var unorderedFloat = parseFloat(unordered);
    unordered = parseInt(unordered);
    if((unordered < 0) || (unordered != unorderedFloat)){
        alert("You must input a non-negative integer!");
        return;
    }
    
    // call descOrder and print returned output to screen
    var output = document.createElement("p");
    output.className = "output";
    console.log(descOrder(unordered));
    output.innerHTML = "The number in descending order is " + descOrder(unordered) + ".";
    enclosingDiv.replaceChild(output, enclosingDiv.querySelector("p.output"));
}