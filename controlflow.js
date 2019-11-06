// Create a function that uses flow of control: for, for of, while, do while, switch
// For-of includes use of an array

console.log("Hello world!");

var starttime = new Date().getTime();

controlFlow();

function controlFlow()
{
    let i;
    let myArray = [ i ];
    let loops = 0;

    for (i = 0; i < 10; i++)
    {
        i = i * (i-1);      // infinite loop

        loops += 1;
        loopLog(loops);
        if (applyBrakes(1000)) 
        {   console.log("Final for-loop count: " + loops);
            break;
        }
    }

    loops = 0;
    for (j of myArray)
    {
        i += 1;
        myArray.push(i);    // infinite loop
        loops += 1;
        loopLog(loops);
        if (applyBrakes(1000)) 
        {   console.log("Final for-of-loop count: " + loops);
            console.log("Final array length: " + myArray.length);
            break;
        }
    }

    loops = 0;
    do {
        void(0);
        loops += 1;
        loopLog(loops);
        if (applyBrakes(1000)) 
        {   console.log("Final do-while-loop count: " + loops);
            break;
        }
    } while (true);

    loops = 0;
    while (true)
    {   void(0);
        loops += 1;
        loopLog(loops);
        if (applyBrakes(1000)) 
        {   console.log("Final while-loop count: " + loops);
            break;
        }
    }
}

function applyBrakes (timeout)
{   //console.log(new Date().getTime() - starttime);
    if ( new Date().getTime() - starttime < timeout ) 
        return false;
    starttime = new Date().getTime();
    return true;
}

function loopLog(loopcount)
{
    switch (loopcount)
        {
            case 10:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 100:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 1000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 10000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 100000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 1000000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 10000000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 100000000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
            case 1000000000:
                    console.log("After " + loopcount + " loops");
                    console.log(new Date().getTime() - starttime);
                    break;
        }
}