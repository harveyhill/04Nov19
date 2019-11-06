function raceResults(value){

    switch(value){
        case 1:
            console.log("You finished in first place.");
            break;
        case 2:
            console.log("You finished in second place.");
            break;
        case 3:
            console.log("You finished in third place.");
            break;
        default:
            console.log("loser.");
    }

    if (value == 1){
        console.log("Congratulations!");
    }
    else if (value == 2 || value == 3){
        console.log("Try harder next time...");
    }

}

function make50(value){
    let x = value

    while(x < 50){
        console.log(x);
        x++;
    }

    while(x > 50){
        console.log(x);
        x--;
    }

    if (value != 50){
        console.log("your value was", value, "but now it is ", x);
    }
    else{
        console.log("That's already 50.");
    }
    
    
}

function spam(value){

    let x = 1;
    do{
        console.log("A");
        x++;
    } while (x <= value);

}

function forArray(){
    let testArray = ["Randy Savage", "Hulk Hogan", "Big Show"];
    
    for (x of testArray){
        console.log(x);
    }
}

function forLoop(){
    let x = 10;
    for (i=0; i < 10; i++){
        console.log(i + 1);
    }
}