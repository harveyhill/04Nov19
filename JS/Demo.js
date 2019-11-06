document.getElementById("icon").addEventListener("mouseover", 
    function() {   
        document.getElementById('icon').src='../img/v217-2-mint-ning-29-icons-inverted.jpg';
    });
document.getElementById("icon").addEventListener("mouseout", 
function() {   
    document.getElementById('icon').src='../img/v217-2-mint-ning-29-icons.jpg';
});

function demohelper(number)
{
    //displays all numbers from 0 to number, exclusive of number
    i=0;
    do{
        console.log(i);
        i++;
    }while(i<number);
}
function demo(number,option,val){
    switch(option){
        case 1: //roll val number of 'number' sided die. demo(20,1,3) = 3d20
            for(i=1;i<=val;i++)
                console.log(Math.floor(Math.random()*number));
        break;
        case 2: //display all numbers from 1 to number that are divisible by val
            i=1;
            while(i<=number){
                if(i%val==0)
                    console.log(i);
                i++;
            }
        break;
        case 3: //display all elements of a list passed as val. Repeat 'number' amount of times
            for(i=0;i<number;i++)
                for(element of val)
                    console.log(element);
        break;
        default:
            demohelper(number);
    }
}


