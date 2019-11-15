/**Uses Dice API, for rolling a 6 sided die used in table top RPGs and other games**/
//ROLL DAT ROCK!!

function ajaxGetDiceRoll(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //these free APIs are often unreliable, better check it...
        if(xhr.readyState < 4){
            document.getElementById('rolldice').innerHTML = "Loading... ...";
            //trouble shooting
            console.log('xhr.readyState = ' + xhr.readyState + ": Possibly Loading... ...");
        }
        if(this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
            let dice_roll = JSON.parse(this.response);
            document.querySelector("#rolldice").innerHTML = dice_roll.dice;
            //trouble shooting
            console.log('dice_roll.dice = ' + dice_roll.value);
            console.log('This is the STATUS: ' + this.status);

        }else if(this.status == 200){
            let dice_roll = JSON.parse(this.response);
            document.getElementById('rolldice').innerHTML = dice_roll.dice;
        }
    }
    xhr.open("GET", "http://dice.spinosaurus.work/v1/dice", true);
    xhr.send();
}

window.onload = function(){
    document.querySelector('#getDieRoll').addEventListener("click", this.ajaxGetDiceRoll);
}
