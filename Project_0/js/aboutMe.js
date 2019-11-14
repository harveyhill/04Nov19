// JS to make fancy collapsible elements

function collapseExpand(n){
    // find out what was clicked
    switch(n){
        case 0:
            var clicked = document.querySelector("div[id='football']");
            var newBackground = "url('../backgrounds/whiteout.jpg') center/cover no-repeat";
            break;
        case 1:
            var clicked = document.querySelector("div[id='coding']");
            var newBackground = "url('../backgrounds/nesslite.gif') center/cover no-repeat";
            break;
        case 2:
            var clicked = document.querySelector("div[id='skiing']");
            var newBackground = "url('../backgrounds/the_wall.jpg') center/cover no-repeat";
            break;
        default:
            var clicked = document.querySelector("div[id='music']");
    }

    // change div and background
    if(clicked.className == "expanded"){
        clicked.className = "collapsed";
        document.querySelector("div[id='backgroundImage']").style.background = "url('../backgrounds/cliffs_of_moher.jpg') center/cover no-repeat";    }
    else{
        clicked.className = "expanded";
        document.querySelector("div[id='backgroundImage']").style.background = newBackground;
    }
    var collapsedContent = clicked.nextElementSibling;

    // collapse or expand
    for(i = 0; i < 2; i++){
        if(collapsedContent.style.display == "inline-block"){
            collapsedContent.style.display = "none";
        } else{
            collapsedContent.style.display = "inline-block";
        }
        if(n == 2 || n == 0){
            collapsedContent = collapsedContent.nextElementSibling;
        }
        else{
            break;
        }
    }
}
