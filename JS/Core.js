function videoParallax(){
   
    let bodyElement=document.querySelector("html");
    if(bodyElement.scrollHeight/bodyElement.clientHeight>1.5){
        let scrollPercent=bodyElement.scrollTop/(bodyElement.scrollHeight-bodyElement.clientHeight);
        document.querySelector("#backgroundvideo").style.bottom=((scrollPercent*40)-40)+"%";
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
function dropdownClick(event)
{
    document.querySelector(".dropdownButton").innerHTML=event.target.innerHTML;
    document.querySelector(".dropdown").classList.remove('show')
    setActiveChallenge(event.target.innerHTML);
}
function setActiveChallenge(challengeName)
{
    let challenges=document.getElementsByClassName("challengeContainer");
    for (i=0;i<challenges.length;i++)
        challenges[i].style.display="none";
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