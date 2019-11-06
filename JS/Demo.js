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
    i=0;
    do{
        console.log(i);
        i++;
    }while(i<number);
}
function demo(number,option,val){
    switch(option){
        case 1:
            for(i=1;i<=val;i++)
                console.log(Math.floor(Math.random()*number));
        break;
        case 2:
            i=1;
            while(i<=number){
                if(i%val==0)
                    console.log(i);
                i++;
            }
        break;
        case 3:
            for(i=0;i<number;i++)
                for(element of val)
                    console.log(element);
        break;
        default:
            demohelper(number);
    }
}


