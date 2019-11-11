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
function setActiveChallenge(challengeName)
{
    let challenges=document.getElementsByClassName("challengeContainer");
    for (i=0;i<challenges.length;i++)
        challenges[i].style.display="none";
    switch(challengeName){
        case "fib":
            document.querySelector("#fibContainer").style.display="block";
            break;
        case "bub":
            document.querySelector("#bubSortContainer").style.display="block";
        break;
        case "rev":
            document.querySelector("#revStrContainer").style.display="block";
            break;
        case "fac":
            document.querySelector("#factoriContainer").style.display="block";
            break;
        case "subs":
            document.querySelector("#subStrContainer").style.display="block";
            break;
        case "even":
            document.querySelector("#isEvenContainer").style.display="block";
            break;
        case "palin":
            document.querySelector("#isPalinContainer").style.display="block";
            break;
        case "obj":
            document.querySelector("#objLitContainer").style.display="block";
            break;
        case "desc":
            document.querySelector("#descOrdContainer").style.display="block";
            break;
    }
}