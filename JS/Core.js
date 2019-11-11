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
}