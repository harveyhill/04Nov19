function readTextFile(file)
{
    var textFile = new XMLHttpRequest();
    var rText = "";
    textFile.open("GET", file);
    textFile.onreadystatechange = function ()
    {
        if(textFile.readyState === 4)
        {
            if(textFile.status === 0)
            {
                textFile.send();
                rText = textFile.responseText;
                console.log(rText);
            }
        }
    }
    return rText;
}

function convertTextToArray(textToConvert)
{
    var textArray = textToConvert.split(/\r?\n/);
    console.log(textArray);
    return textArray;
}

var myFile = "skillset.txt";
var myText = readTextFile(myFile);
var skillSetArray = convertTextToArray(myText);

function getCurrentWeatherAtZipcode(zipcode)
{
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "api.openweathermap.org/data/2.5/weather?zip=" + zipcode);
    myRequest.send();
    console.log(myRequest.responseText);
}