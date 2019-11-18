// 15 JavaScript Function Challenges 
//challenge 1

function fibonacciSequence(x){
    if(x == 0) return 0;
    if(x == 1) return 1;

    return fibonacciSequence(x - 1) + fibonacciSequence(x - 2);
}

function onClickFibHandler(){
    var inputNum = document.getElementById("enter_field_fib").value;
    var n = Number(inputNum); //make sure n input to fib function is number
    var f = fibonacciSequence(n);

    var outputFibSeqNum = f.toString(); //make sure the result displays properly
    document.getElementById("output_field_fib").value = outputFibSeqNum;
}

//challenge 2
function bubbleSort(xArray){
    var swapped;
    var temp;
    do {
        swapped = false;
        for (i=0; i < xArray.length-1; i++) {
            console.log('What is xArray[i] now? ' + xArray[i]);
            if (xArray[i] > xArray[i+1]) {
                temp = xArray[i];
                xArray[i] = xArray[i+1];
                xArray[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    var outString = "";
    for(i=0; i<=xArray.length-1; i++){
        outString+= " " + xArray[i];
    }
    document.getElementById("output_field_bubblesort").value = outString;
}

function onClickBubbleSortHandler(){
    var arrayList = new Array();
    var inputElements = document.getElementById("enter_field_bubblesort").value;

    //need to pull number symbols in string and convert digit-symbols-string individually into a Number, then push the Number individually each into the Array, one at a time in a for loop
    console.log('Show me inputElements: ' + inputElements);
    var convert = "";
    for(i=0; i<= inputElements.length-1; i++){
        console.log('What is the char in the string atm? ' + inputElements[i]);
        if(inputElements[i] != ','){
            convert+=inputElements[i];
            console.log('Show me the convert string atm: ' + convert);
        }else if((inputElements[i]==',') || (inputElements[i]==';')){
            var n = Number(convert);
            console.log('What is the Number atm? ' + n);
            arrayList.push(n);
            convert = "";
        }
    }
    for(i=0; i<=arrayList.length-1; i++){
        console.log('SHOW ME arrayList Elements: ' + arrayList[i]);
    }
    bubbleSort(arrayList);
}

//challenge 3
function reverseStr(s){
    var r = ""; //reversed string
    for(i=s.length-1; i>=0; i--){
        r+=s[i]; //append chars of s string into r reversed-string
    }
    return r;
}

function onClickReverseStrHandler(){
    var inputStr = document.getElementById("enter_field_reverseString").value;
    var r = reverseStr(inputStr); //the reversed string
    document.getElementById("output_field_reverseString").value = r;
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

function onClickFactorialFunc(){
    var inputNum = document.getElementById("enter_field_factorialFunc").value;
    var x = Number(inputNum);
    var f = factorialFunc(x);

    var outputFactorial = f.toString(); //make sure the result displays properly
    document.getElementById("output_field_factorialFunc").value = outputFactorial;
}

//challenge 5
function getSubstring(s, length, offset){
    if(isNaN(length) || isNaN(offset)){
        alert("Incorrect input, enter numbers only");
    }
    if((offset>length) || (s.length!=length)){
        alert("Incorrect input, offset must be less than length AND/OR length must equal string length")
    }
    return s.substring(offset,length);
}

function onClickSubString(){
    var inputStr = document.getElementById("enter_field_getSubStringArg").value;
    var inputOffset = document.getElementById("enter_field_getSubStringOffset").value;
    
    var len = inputStr.length;
    var offset = Number(inputOffset);
    var output_s = getSubstring(inputStr,len,offset);
    document.getElementById("output_field_getSubString").value = output_s;
}

//challenge 6
function isEven(n){
    //first, check input validation
    if(isNaN(n)){
        alert('Incorrect Input, Enter Integers Only Please');
        return false;
    }
    if(n !== parseInt(n)){
        alert('Incorrect Input, Enter Integers Only Please');
        return false;
    }
    if (n===0)
        return true;
    else if (n === 1)
        return false;
    else if (n < 0)
        return isEven(-n);
    else
        return isEven(n-2);
}

function onClickIsEven(){
    var inputNum = document.getElementById("enter_field_isEven").value;
    var n = Number(inputNum); //make sure n input to fib function is number
    var verdict = "FALSE: NUMBER IS ODD"; 
    if(isEven(n))
       verdict = "TRUE: NUMBER IS EVEN";
        
    document.getElementById("output_field_isEven").value = verdict;
}

//challenge 7
function isPalindrome(s){
    var n = s.length;
    s = s.toUpperCase();

    for(i=0; i<= n/2; i++){
        if(s[i] != s[n-1-i])
            return false;
    }
    return true;
}

function onClickIsPalindromeHandler(){
    var inputStr = document.getElementById("enter_field_isPalindrome").value;
    var p = isPalindrome(inputStr); 
    var verdict = "";
    console.log('Test: ' + p);
    if(p==true)
        verdict = "TRUE: String Is a Palindrome";
    else
        verdict = "FALSE: String Is NOT a Palindrome";
    document.getElementById("output_field_isPalindrome").value = verdict;
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

    //print diamond, the motherfucker... ... ...
    if(shape = "diamond"){
        //code stub
    }
}

function onClickPrintShapeHandler(){
    var inputShape = document.getElementById("enter_field_printShapeType").value;
    var inputHeight = document.getElementById("enter_field_printShapeGetHeight").value;
    var inputCharacter = document.getElementById("enter_field_printShapeCharacter").value;
    var h = Number(inputHeight);

    var temp_idea_variable = printShape(inputShape,inputHeight,inputCharacter); //this is not how the shape will print, this variable is just a temporary place holder...
    document.getElementById("output_field_printShape").value = temp_idea_variable; //again, this is not how the shape will print, this is a place holder ...
}


//challenge 9
const anObj = { 100: 'a', 2: 'b', 7: 'c' };

function traverseObject(obj){
    var itemsObj = "";
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`); 
        itemsObj += " " + `${key} ${value}`;
    });
    return itemsObj;
}

function onClickTraverseObjectHandler(){
    var displayObjItems = traverseObject(anObj);
    document.getElementById("output_field_traverseObjDisplay").value = displayObjItems;
}

//challenge 10
function deleteElement(xArray, index){
    delete xArray[index];
    var outputString = "";
    for(i=0; i<xArray.length-1; i++){
        outputString+= " " + xArray[i];
    }
    
    document.getElementById("output_field_deleteElement").value = outputString;
    document.getElementById("output_field_deleteElementGetLength").value = " " + xArray.length;
}

function onClickDeleteElementHandler(){
    var arrayList = new Array();
    var inputElements = document.getElementById("enter_field_deleteElement").value;

    //need to pull number symbols in string and convert digit-symbols-string individually 
    //into a Number, then push the Number individually each into the Array, one at a time in a for loop
    console.log('Show me inputElements: ' + inputElements);
    var convert = "";
    for(i=0; i<= inputElements.length-1; i++){
        console.log('What is the char in the string atm? ' + inputElements[i]);
        if(inputElements[i] != ','){
            convert+=inputElements[i];
            console.log('Show me the convert string atm: ' + convert);
        }else if((inputElements[i]==',') || (inputElements[i]==';')){
            var n = Number(convert);
            console.log('What is the Number atm? ' + n);
            arrayList.push(n);
            convert = "";
        }
    }
    for(i=0; i<= arrayList.length-1; i++){
        console.log('ARRAY LIST: ' + arrayList[i]);
    }
    deleteElement(arrayList, 2);
}

//challenge 11
function spliceElement(xArray){
    var length = xArray.length;

    console.log("Array length is: " + length);
    if(length < 3){
        return "Length less than 3";
    }else{
        xArray.splice(index, 2);
    }
    console.log("Array length is now: " + length);

    var outputString = "EMPTY";
    for(i=0; i<xArray.length-1;i++){
        outputString += " " + xArray[i];
    }
    document.getElementById("output_field_spliceElement").value = outputString;
}

function onClickSpliceElementHandler(){
    var arrayList = new Array();
    var inputElements = document.getElementById("enter_field_spliceElement").value;
    //need to pull number symbols in string and convert digit-symbols-string individually 
    //into a Number, then push the Number individually each into the Array, one at a time in a for loop
    var convert = "";
    for(i=0; i<= inputElements.length-1; i++){
        console.log('What is the char in the string atm? ' + inputElements[i]);
        if(inputElements[i] != ','){
            convert+=inputElements[i];
            console.log('Show me the convert string atm: ' + convert);
        }else if((inputElements[i]==',') || (inputElements[i]==';')){
            var n = Number(convert);
            console.log('What is the Number atm? ' + n);
            arrayList.push(n);
            convert = "";
        }
    }
    spliceElement(arrayList);
}

//challenge 12
function Person(name, age){
    this.name = name;
    this.age = age;
}

function onClickPersonConstructorHanlder(){
    var inputName = document.getElementById("enter_field_PersonConstructName").value;
    var inputAge = document.getElementById("enter_field_PersonConstructAge").value;
    
    var age = Number(inputAge);
    var employee_1 = new Person(inputName, age);
    var appendNameAgeOutput = " " + employee_1.name + " " + employee_1.age;

    document.getElementById("output_field_PersonObject").value = appendNameAgeOutput;
}

//challenge 13
function getPerson(name, age){
    return " " + name + " " + age;
}

function onClickGetPersonHandler(){
    var searchName = document.getElementById("enter_field_getPersonName").value;
    var searchAge = document.getElementById("enter_field_getPersonAge").value;

    var outputGetPerson = getPerson(searchName,searchAge);
    console.log('Show me outputGetPerson ' + outputGetPerson);
    document.getElementById("output_field_getPerson").value = outputGetPerson;
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
function descendOrder(t){
    if(Number.isNaN(t))
        alert('Incorrect input, please enter Integers, whole numbers only');
    t = Math.abs(t); // change negative integer to positive
    let numberArray = t.toString().split('');

    let sorted = numberArray.sort(function(a, b) {
        return b - a;
    });
    console.log('What is -sorted- output? ' + sorted);
    return  parseInt(sorted.join(''));
}

function onClickDescendOrderHandler(){
    var inputNum = document.getElementById("enter_field_descendOrder").value;
    var n = Number(inputNum); //make sure n input to descendOrder function is an Integer Number ONLY
    console.log('What is the input number? ' + n);
    var d = descendOrder(n);
    console.log('What is the output number? ' + d);

    var outputDescOrdNum = d.toString(); //make sure the result displays properly
    document.getElementById("output_field_descendOrder").value = outputDescOrdNum;
}