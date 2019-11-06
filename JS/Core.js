function videoParallax(){
   
    let bodyElement=document.querySelector("html");
    let scrollPercent=bodyElement.scrollTop/(bodyElement.scrollHeight-bodyElement.clientHeight);
    document.querySelector("#backgroundvideo").style.bottom=((scrollPercent*40)-40)+"%";
    console.log(document.querySelector("#backgroundvideo").style.bottom);
}
document.addEventListener("scroll",videoParallax);