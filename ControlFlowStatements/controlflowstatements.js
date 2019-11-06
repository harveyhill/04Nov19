var ii = 0;
do 
{
    for(let i = 0; i < 3; i++)
    {
        let s=''
        switch (i) 
        {
            case 0:
                s = ii + ':first run';
                break;
            case 1:
                s = ii + ':second run';
                break;
            default:
                s = ii + ':run count > 2';
                break;
        }
        console.log(s);
    }
    ii = ii + 1;
}
while (ii < 2);
while (ii < 4)
{
    if (ii>=2)
    {
        console.log('complete');
    }
    ii = ii + 1
}
console.log(ii);
var myArray = ['at','this','is','that'];
myArray.reverse();
for (element in myArray)
{
    console.log(myArray[element]);
}
for (element of myArray)
{
    console.log(element);
}
