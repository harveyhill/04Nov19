/* add ball rack images and score boxes on page load; i added this to slightly reduce the amount of repetitve code in api.html */
window.addEventListener("load", function(){
    loadBallRacks("player");
    loadBallRacks("computer");
    setTimeout(function(){document.querySelector("span[id='playerGame']").querySelector("div[class='scoreBox']").style.display = "block";}, 100);
    setTimeout(function(){document.querySelector("span[id='computerGame']").querySelector("div[class='scoreBox']").style.display = "block";}, 100);
});

/* when user chooser their player:
    get player name and 3pt percentage in 2018 from balldontlie api
    randomly choose computer player and get their name and 3pt percentage in 2018 from balldontlie api*/
document.querySelector("select[id='playerDropDown']").addEventListener("change", function(){
    // get div element holding player console and player drop down
    var playerSpan = document.querySelector("span[id='playerGame']");
    var computerSpan = document.querySelector("span[id='computerGame']");
    var dropDown = playerSpan.querySelector("select[id='playerDropDown']");

    // find selected player
    var dropDownIndex = dropDown.selectedIndex;
    var playerImg = dropDown[dropDownIndex].value;

    /* get player ID for api call

    in balldontlie API db player ids are as follows
    Joe Harris: 197
    Danny Green: 184
    Seth Curry: 114
    Chris Paul: 367
    Josh Richardson: 391
    Rodney Hood: 218
    Nikola Jokic: 246
    Kyle Kuzma: 265
    Russell Westbrook: 472 */
    var playerID = 0;
    switch(dropDownIndex){
        case 0:
            playerID = 197;
            break;
        case 1:
            playerID = 184;
            break;
        case 2:
            playerID = 114;
            break;
        case 3:
            playerID = 367;
            break;
        case 4:
            playerID = 391;
            break;
        case 5:
            playerID = 218;
            break;
        case 6:
            playerID = 246;
            break;
        case 7:
            playerID = 265;
            break;
        default:
            playerID = 472;
    }

    // change player name, player 3pt percentage, and background
    get3PT(playerID, "player");
    getName(playerID, "player");
    playerSpan.style.background = "rgb(4, 30, 66) url('../playerHeadshots/" + playerImg + ".png') no-repeat top right";

    /* randomly choose computer player

    in balldontlie api db computer player IDs are as follows
    Kemba Walker: 465
    Langston Galloway: 168
    Justin Jackson: 235
    Gerald Green: 186
    Kelly Olynk: 358
    Kevin Durant: 140
    Terry Rozier: 403
    Bradley Beal: 37
    Avery Bradley: 59 */
    var computerIndex = Math.floor(Math.random() * 9);
    var computerID = 0;
    var computerImg = "";
    switch(computerIndex){
        case 0:
            computerID = 465;
            computerImg = "kembaWalker";
            break;
        case 1:
            computerID = 168;
            computerImg = "langstonGalloway";
            break;
        case 2:
            computerID = 235;
            computerImg = "justinJackson";
            break;
        case 3:
            computerID = 186;
            computerImg = "geraldGreen";
            break;
        case 4:
            computerID = 358;
            computerImg = "kellyOlynyk";
            break;
        case 5:
            computerID = 140;
            computerImg = "kevinDurant";
            break;
        case 6:
            computerID = 403;
            computerImg = "terryRozier";
            break;
        case 7:
            computerID = 37;
            computerImg = "bradleyBeal";
            break;
        default:
            computerID = 59;
            computerImg = "averyBradley";
    }
    
    // change computer name, computer 3pt percentage, and background
    get3PT(computerID, "computer");
    getName(computerID, "computer");
    computerSpan.style.background = "rgb(4, 30, 66) url('../computerHeadshots/" + computerImg + ".png') no-repeat top right";
});

// api call to get 3pt percentage in 2018
function get3PT(id, whichBox){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var returnedObject = JSON.parse(this.response);
            var chosen = document.querySelector("div[id='chosen" + whichBox + "']");
            var threept = String(returnedObject.data[0].fg3_pct);
            chosen.querySelector("u[id='" + whichBox + "3PT']").innerHTML = threept;
        }
    }
    xhr.open("GET", "https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + String(id), true);
    xhr.send();
}

// api call to get player name
function getName(id, whichBox){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var returnedObject = JSON.parse(this.response);
            var chosen = document.querySelector("div[id='chosen" + whichBox + "']");
            var name = returnedObject.first_name + " " + returnedObject.last_name;
            chosen.querySelector("u[id='" + whichBox + "Name']").innerHTML = name;
        }
    }
    xhr.open("GET", "https://www.balldontlie.io/api/v1/players/" + String(id), true);
    xhr.send()
}

/* play game!

3PT contest rules: 25 shots each, 5 racks, 5 balls per rack
each shot is worth 1 point except 5th ball on each rack which is worth 2 points */
document.querySelector("input[id='threePTContest']").addEventListener("click", function(){
    // get player and computer 3pt percentages
    var player3PT = parseFloat(document.querySelector("u[id='player3PT']").innerHTML);
    var computer3PT = parseFloat(document.querySelector("u[id='computer3PT']").innerHTML);

    var i = 0;
    for(i = 0; i < 25; i++){
        setTimeout(function(){nextShot(player3PT, "player");}, (500 + i * 100));
        setTimeout(function(){nextShot(computer3PT, "computer");}, (500 + i * 100));
    }

    setTimeout(function(){
        // give confetti to winner
        var playerScore = parseInt(document.querySelector("u[id='playerScore']").innerHTML);
        var computerScore = parseInt(document.querySelector("u[id='computerScore']").innerHTML);
        if(playerScore > computerScore){
            var playerName = document.querySelector("u[id='playerName']").innerHTML;
            var playerSpan = document.querySelector("span[id='playerGame']");
            playerSpan.style.background = "url('../playerHeadshots/" + nameCamelCase(playerName) + ".png') top right no-repeat, url('https://media.giphy.com/media/1itd8X8whi3eOgZSRW/giphy-downsized.gif') top right/200px 150px no-repeat rgb(4, 30, 66)";
        }
        else if(computerScore > playerScore){
            var computerName = document.querySelector("u[id='computerName']").innerHTML;
            var computerSpan = document.querySelector("span[id='computerGame']");
            computerSpan.style.background = "url('../computerHeadshots/" + nameCamelCase(computerName) + ".png') top right no-repeat, url('https://media.giphy.com/media/1itd8X8whi3eOgZSRW/giphy-downsized.gif') top right/200px 150px no-repeat rgb(4, 30, 66)";
        }
    }, 4000);
});

/* shoot the next shot, generate random number between 0 and 1 (made shot if random number is 
    less than player's 3pt percentage in 2018) */
function nextShot(percentage, player){
    // get current score
    var currentScore = parseInt(document.querySelector("u[id='" + player + "Score']").innerHTML);
    // for loops for rows and columns
    for(i = 1; i <= 5; i++){
        // get next ball to be shot
        var currentRack = document.querySelector("div[id='" + player + "Rack" + String(i) + "']");
        for(j = 1; j <= 5; j++){
            var currentBall = currentRack.querySelector("img[class='ball" + String(j) + "']");
            if(currentBall.src.includes("faded")){
                var shotChance = Math.random();
                if(shotChance <= percentage){
                    // made shot, change image to highlighted ball, update score
                    if(j == 5){
                        currentBall.src = "../gameIcons/aba.png";
                        document.querySelector("u[id='" + player + "Score']").innerHTML = String(currentScore + 2);
                    }
                    else{
                        currentBall.src = "../gameIcons/basketball.png";
                        document.querySelector("u[id='" + player + "Score']").innerHTML = String(currentScore + 1);
                    }
                }
                else{
                    // missed shot, change image to red x
                    currentBall.src = "../gameIcons/red_x.png";
                }
                return;
            }
        }
    }
    return;
}

// reset to play again
document.querySelector("input[id='reset']").addEventListener("click", function(){
    // change back all balls to original images and reset scores to zero
    loadBallRacks("player");
    loadBallRacks("computer");
    document.querySelector("u[id='playerScore']").innerHTML = String(0);
    document.querySelector("u[id='computerScore']").innerHTML = String(0);
    resetBackground("player");
    resetBackground("computer");
});

// reset background, sweep up confetti
function resetBackground(player){
    var name = document.querySelector("u[id='" + player + "Name']").innerHTML;
    var span = document.querySelector("span[id='" + player + "Game']");
    name = nameCamelCase(name);
    span.style.background = "rgb(4, 30, 66) url('../" + player + "Headshots/" + name + ".png') no-repeat top right";
}

// computer name isn't stored anywhere, so let's grab it from the u element to change background image back
function nameCamelCase(name){
    // name is currently in format like Kemba Walker, but we need it in kembaWalker
    // find the space
    var spaceIndex = name.indexOf(" ");

    // make the first letter lower case and remove the space
    name = name[0].toLowerCase() + name.substring(1, spaceIndex) + name.substring(spaceIndex+1);
    return name;
}

// add ball rack images 
function loadBallRacks(whichPlayer){
    for(i = 1; i <= 5; i++){
        var currentRack = document.querySelector("div[id='" + whichPlayer + "Rack" + String(i) + "']");
        for(j = 1; j <= 5; j++){
            var currentBall = currentRack.querySelector("img[class='ball" + String(j) + "']");
            if(j == 5){
                currentBall.src = "../gameIcons/faded_aba.png";
            }
            else{
                currentBall.src = "../gameIcons/faded_basketball.png";
            }
        }
    }
}