function forLoopExample()
{
    /* Declare Array */
    let baseballTeams = ["Phillies", "Mets", "Marlins", "Nationals", "Braves"];
    console.log("NL East Standings:")
    /* For Loop */
    for(i = 0;i < baseballTeams.length; i++)
    {
        if(baseballTeams[i] == "Phillies")
        {
            console.log("The " + baseballTeams[i] + " had 81 wins this season.");
        }
        else if(baseballTeams[i] == "Mets")
        {
            console.log("The " + baseballTeams[i] + " had 86 wins this season.");
        }
        else if(baseballTeams[i] == "Marlins")
        {
            console.log("The " + baseballTeams[i] + " had 57 wins this season.");
        }
        else if(baseballTeams[i] == "Nationals")
        {
            console.log("The " + baseballTeams[i] + " had 93 wins this season.");
        }
        else if(baseballTeams[i] == "Braves")
        {
            console.log("The " + baseballTeams[i] + " had 97 wins this season.");
        }
        else
        {
            console.log("Unknown Baseball Team at: " + i);
        }
    }
}

function forOfExample()
{
    /* Declare Array */
    let baseballTeams = ["Phillies", "Mets", "Marlins", "Nationals", "Braves"];
    let team = "";
    /* for of loop */
    for(team of baseballTeams)
    {
        if(team == "Phillies")
        {
            console.log("The " + team + " had 81 wins this season.");
        }
        else if(team == "Mets")
        {
            console.log("The " + team + " had 86 wins this season.");
        }
        else if(team == "Marlins")
        {
            console.log("The " + team + " had 57 wins this season.");
        }
        else if(team == "Nationals")
        {
            console.log("The " + team + " had 93 wins this season.");
        }
        else if(team == "Braves")
        {
            console.log("The " + team + " had 97 wins this season.");
        }
        else
        {
            console.log("Unknown Baseball Team at: " + team);
        }
    }
}

function switchExample(n)
{
    let baseballTeams = ["Phillies", "Mets", "Marlins", "Nationals", "Braves"];

    switch(n) 
    {
        case 1:
            console.log("The Braves came in first place in the NL East");
            break;
        case 2:
            console.log("The Nationals came in second place in the NL East");
            break;
        case 3:
            console.log("The Mets came in third place in the NL East");
            break;
        case 4:
            console.log("The Phillies came in fourth place in the NL East");
            break;
        case 4:
            console.log("The Marlins came in last place in the NL East");
            break;
        default:
            console.log("There are only 5 teams in the NL East");
    }
}

function ifExample(n)
{
if (n == "yes") return "no";
if (n == "no") return "yes";
return "no";
}

function whileExample(n)
{
    if (n < 1000 && n > 0)
    {
        while (n < 1000)
        {
            n = n * 3;
            console.log(n);
        }
    }
    return n;
}

function doWhileExample(n)
{
    var bool = false;

    do 
    {
        n = n * 3;
        console.log(n);

        if (n > 1000)
        {
            bool = true;
        }
    }
    while(bool == false) 
}