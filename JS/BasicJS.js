// This sets a listener the lement with the ID getFibonacciResult, so that
// when the button is clicked, it calls the FibonacciStart function.
window.onload = function(){
    document.querySelector('#getFibonacciResult').addEventListener("click", FibonacciStart);
}

/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/

// This function simply returns the nth number of the fibonacci sequence using recursion.
function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

// This function takes the value stored in the element with the ID of FibonacciSubmit
// and sets the result into the element with the ID FibonacciResult.
function FibonacciStart() {
    var fibonacciResult = fib(document.querySelector('#FibonacciSubmit').value);
    document.querySelector('#FibonacciResult').value = fibonacciResult;
};

/* Hello World */
// Here we are going to take a look at control flow statements and arrays.
function HelloWorldForLoop() {
    // Here we are declaring an array, we do this using square brackets and
    // containing each string value inside quites, separated by commas.
    let internationalGreetings = ["Hola", "Konnichiwa", "Bonjour"];

    // Here we iterate through the array through the use of a for loop.
    // Inside the for loop we declare a variable we call i, and set it to be equal to zero.
    // Next we say that as long as the value of i is less than the size, or length, of the array we keep doing it.
    // Finally we say after we do this, to increment the value of i by one.
    for(i = 0;i < internationalGreetings.length(); i++){
        // Now we check to see what the value inside the array location of 'i' is.
        // If the value is 'Hola'  we perform the logic contained within the code block.
        if(internationalGreetings[i] == "Hola"){
            // If the evaluation above is true, we are going to print out the below line to the log.
            console.log(internationalGreetings[i] + ", Greeting is hello in spanish.")
        // If the above was not true, we are going to check this next evaluation.
        }else if(internationalGreetings[i] == "Konnichiwa"){
            console.log(internationalGreetings[i] + ", Greeting is good afternoon in Japanese.")
        // And the same as above.
        }else if(internationalGreetings[i] == "Bonjour"){
            console.log(internationalGreetings[i] + ", Greeting is hello in French.");
        // If we reach this point it doesn't match anything we checked against and will execute the following.
        }else{
            console.log("Unknown International Reading at: " + i);
        }
    }

}

// Now lets look at it instead using an enhanced for loop, or as it is called in JS
// a For-Of loop.
function HelloWorldForOfLoop(){
    let internationalGreetings = ["Hola", "Konnichiwa", "Bonjour"];
    // We need a variable to hold our greeting in this case.
    let greeting;
    // for each value inside the loop it will place it in greeting.
    for(greeting of internationalGreetings){
        // Now we can evaluate the current value of greeting and perform any desired logic.
        if(greeting == "Hola"){
            console.log(greeting + ", Greeting is hello in spanish.")
        }else if(greeting == "Konnichiwa"){
            console.log(greeting + ", Greeting is good afternoon in Japanese.")
        }else if(greeting == "Bonjour"){
            console.log(greeting + ", Greeting is hello in French.");
        }else{
            console.log("Unknown International Greeting: " + greeting);
        }
    // It works in effectively the same way as a standard for loop, except it is a little less hassle to write.
    // There is also a for-in loop which works in a similar fashion, but deals with objects instead of arrays. 
    // Speaking of objects...
    }
}

// Now lets take a look at another type of loop, the while loop, and objects.
function ChaseWhile(){
    // This form of collection is an object.
    // Instead of refering to a location in the array, for an object we reference it by the name given for the value.
    // This is a name-value pair. make being the name below, and ford being the value.
    let vehicle = {make:"Ford", name:"Bronco", color:"White", year:"1993"};
    // This is a boolean, and we'll make it either true or false to determine if we want the loop to continue.
    let notGivenUp = true;
    // Another value we are using, this time in an if statement.
    let elapsedTime = 0;
    // While the value of  notGiveUp is true, the body of this loop will continue to execute.
    // If it ever becomes false, the loop will not execute.
    while(notGivenUp){
        if(elapsedTime > 119){
            notGivenUp = false;
            console.log("OJ has surrendered after a two hour low speed pursuit.");
            console.log("He was driving a "+vehicle.color+ " " +vehicle.year+ " " +vehicle.make+ " " +vehicle.name);
        } else {
            console.log("OJ in low speed pursuit going on "+elapsedTime+" minutes.");
            elapsedTime++;
        }
    }
}

// This function is the same, but uses a do-while loop instead.
// We use do-while loops whenever we want something to always execute at least once.
function ChaseDoWhile(bool){
    let vehicle = {make:"Ford", name:"Bronco", color:"White", year:"1993"};
    let notGivenUp = bool;
    let elapsedTime = 0;
    // In this case the do executes first, and there are no conditions on this so it will always execute.
    do {
        if(elapsedTime > 119){
            notGivenUp = false;
            console.log("OJ has surrendered after a two hour low speed pursuit.");
            console.log("He was driving a "+vehicle.color+ " " +vehicle.year+ " " +vehicle.make+ " " +vehicle.name);
        } else {
            console.log("OJ in low speed pursuit going on "+elapsedTime+" minutes.");
            elapsedTime++;
        }
    // Now we check to see if the while portion evaluates to true. 
    // If it is it will continue to execute the do block until it is no longer true.
    }while(notGivenUp);
}

// Another example of control flow statements is the switch statement.
function FoodOrderSwitch(value){
    // The switch takes in a value, and then executes the case that matches.
    switch(value) {
        case 1:
            console.log("Ordered a Combo #1: Big Belly Burger");
            // Once we execute the code we need to break, else it will keep 
            // going and execute the next case as well. There may be a use case where this is desired.
            break;
        case 2:
            console.log("Ordered a Combo #2: Big Kahuna Burger");
            break;
        case 3:
            console.log("Ordered a Combo #3: The Max");
            break;
        case 4:
            console.log("Ordered a Combo #4: The Implausible Burger");
            break;
        // If none of the cases match we can set a default branch, which executes if none of the above match.
        default:
            console.log("Invalid option");
            // We do not need to break on the last option because the block ends anyway.
    }
}

function ajaxExample(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let vader = JSON.parse(this.response);
            document.querySelector("#starwars").innerHTML = vader.name;
        }
    }
    xhr.open("GET", "https://swapi.co/api/people/4/", true);
    xhr.send();
}
