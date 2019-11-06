function controlFlow() {
    var temperature = [32, 60, 90, -12];
    var output = "";
    for(i = 0; i < temperature.length; i++)
    {
        if(32 == temperature[i])
        {
            console.log(temperature[i] + " degrees: It's cold");
        }
        else if(temperature[i] >= 60)
        {
            console.log(temperature[i] + " degrees: It's nice outside");
        }
        else
        {
            console.log(temperature[i] + " degrees: it's way too cold!!");
        }
    }

}

function whileForOfFunction()
{
    var counter = 0;
    var items = ["Hello", "world", "foo", "bar", "baz"];

    for(x of items)
    {
        console.log(x);
    }

    while(counter <= 100)
    {
        console.log(counter + " I'm still counting up!!");
        counter++;
    }
    console.log("done counting :-)");

}

function myDoWhileSwitch()
{
    var input = "";
    var input = prompt("Enter a number between 0 and 5, <q> to quit\n");
    do
    {
        switch(input)
        {
            case "0" : console.log("you entered 0"); break;
            case "1" : console.log("you entered 1"); break;
            case "2" : console.log("you entered 2"); break;
            case "3" : console.log("you entered 3"); break;
            case "4" : console.log("you entered 4"); break;
            case "5" : console.log("you entered 5"); break;
            default : console.log("Out of range"); break;
        }
        var input = prompt("Enter a number between 0 and 5, <q> to quit\n");
    }
    while("q" != input);
    
}
