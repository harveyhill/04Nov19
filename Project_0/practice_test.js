
function practiceFunc(x) {

    var count = 0;
    var array;
    do{
        if(x == 0){
            count += 10;
            for(i = 0; i < count; i++){
                console.log("Useless toy counting: " + i);
            }
        }else{
            x = 0;
            count++;
        }

    }while(x == 1);

    let make_sumthing_up = ["this", "that", "git", "R", "Done"];

    for(let value of make_sumthing_up){
        console.log(value);
    }

    while(count > 0){
        switch(make_sumthing_up){
            case "this":
                console.log("test 1");
                break;
            case "that":
                console.log("test 2");
                break;
            case "git":
                console.log("test 3");
                break;
        }
        count--;
    }
    
};