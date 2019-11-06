// for
function squared(){
    let i;
    for(i = 0; i < 10; i++){
        console.log(i*i + "\n");
    }
}

// switch
function skiingGuide(){
    let experienceLevel = window.prompt("Please enter your level of skiing experience");
    switch(experienceLevel) {
        case "Intermediate":
            console.log("You can safely ski on a blue square hill.");
            break;
        case "Advanced":
            console.log("You can safely ski on a black diamond hill.");
            break;
        default:
            console.log("You should stick to the green circle hills for now.");
    }
}

// if-else statement and for-of, while, and do-while loops
function browns(){
    let playedGames = 0;
    do{
        console.log("The Cleveland Browns are going to make the playoffs!");
    }while(playedGames > 0);

    // season begins
    playedGames = 1;
    while((playedGames > 0) && (playedGames <= 16)){
        console.log("The Browns are awful.");
        playedGames += 1;
    }

    console.log("\n\n");

    let AFCNorth = ["Baltimore Ravens", "Cincinnati Bengals", "Cleveland Browns", "Pittsburgh Steelers"];
    for(footballTeam of AFCNorth){
        if(footballTeam == "Cleveland Browns"){
            console.log("The " + footballTeam + " have not made the playoffs since 2002.");
        } else{
            console.log("The " + footballTeam + " have made the playoffs since 2002.");
        }
    }
}