function videoParallax(){
   
    let bodyElement=document.querySelector("html");
    if(bodyElement.scrollHeight/bodyElement.clientHeight>1.5){
        let scrollPercent=bodyElement.scrollTop/(bodyElement.scrollHeight-bodyElement.clientHeight);
        document.querySelector("#backgroundVideo").style.bottom=((scrollPercent*40)-40)+"%";
    }
}
function navbarIconMouseover(){
    let navbarIcon=document.getElementById('navbarIcon');
    navbarIcon.addEventListener("mouseover", 
    function() {   
        navbarIcon.src='../img/v217-2-mint-ning-29-icons-inverted.jpg';
    });
    navbarIcon.addEventListener("mouseout", 
    function() {   
        navbarIcon.src='../img/v217-2-mint-ning-29-icons.jpg';
    });
}
function updateField(func, fieldName, inputObject){
    try{
            document.querySelector(fieldName).innerHTML=func(inputObject.value);
    }
    catch(err){
        document.querySelector(fieldName).innerHTML=err;
    }
}
function subStringUpdateField()
{console.log(typeof document.querySelector("#subStringLength").value);
    try{
        document.querySelector("#subStringResult").innerHTML=substring(document.querySelector("#subStringInput").value,
            Number(document.querySelector("#subStringLength").value),
            Number(document.querySelector("#subStringOffset").value));
        
    }   
    catch(err){
        document.querySelector("#subStringResult").innerHTML=err;
    }
}
function updateFieldAndConvert(func, fieldName, inputObject)
{
    let statement;
    try{
        try{
            statement= eval(inputObject.value);
        }
        catch(error){
            throw "Invalid syntax <br>"+error;
        }
        document.querySelector(fieldName).innerHTML=func(statement);
    }
    catch(err){
        document.querySelector(fieldName).innerHTML=err;
    }
}
function setActiveChallenge(challengeName)
{
    document.querySelector("#dropdownButton").innerHTML=challengeName;
    let challenges=document.querySelectorAll(".challengeContainer");
    for (challenge of challenges)
        challenge.style.display="none";
   switch(challengeName){
        case "Fibonacci Seq":
            document.querySelector("#fibContainer").style.display="block";
            break;
        case "Bubble Sort":
            document.querySelector("#bubSortContainer").style.display="block";
        break;
        case "Reverse String":
            document.querySelector("#revStrContainer").style.display="block";
            break;
        case "Factorial":
            document.querySelector("#factoriContainer").style.display="block";
            break;
        case "Sub-string":
            document.querySelector("#subStrContainer").style.display="block";
            break;
        case "Is Even":
            document.querySelector("#isEvenContainer").style.display="block";
            break;
        case "Is Palindrome":
            document.querySelector("#isPalinContainer").style.display="block";
            break;
        case "Object Literal":
            document.querySelector("#objLitContainer").style.display="block";
            break;
        case "Desc Order":
            document.querySelector("#descOrdContainer").style.display="block";
            break;
    }
}