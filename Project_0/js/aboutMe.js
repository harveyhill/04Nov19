// JS to make fancy collapsible elements

function collapseExpand(n){
    switch(n){
        case 0:
            var clicked = document.querySelector("div[id='football']");
            break;
        case 1:
            var clicked = document.querySelector("div[id='coding']");
            break;
        case 2:
            var clicked = document.querySelector("div[id='skiing']");
            break;
        default:
            var clicked = document.querySelector("div[id='music']");
    }
    if(clicked.className == "expanded"){
        clicked.className = "collapsed";
    }
    else{
        clicked.className = "expanded";
    }
    var collapsedContent = clicked.nextElementSibling;
    for(i = 0; i < 2; i++){
        if(collapsedContent.style.display == "inline-block"){
            collapsedContent.style.display = "none";
        } else{
            collapsedContent.style.display = "inline-block";
        }
        if(n == 2){
            collapsedContent = collapsedContent.nextElementSibling;
        }
        else{
            break;
        }
    }

}
