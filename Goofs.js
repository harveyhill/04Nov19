/*
shift + control + c
Inside html page:
<head>
<script src="">
...
</script>
</head>
html comment:
<!-- ... -->
*/

console.log("Get ready for some goofs and gafs!!!");

var teacher = "Cool";
var count = 2;

while(count != 0){
    if(teacher == "Cool"){
        console.log("Teacher is cool.")}
    else{console.log("Harv is still cool")}
    teacher = "";
    count--;
}

var array = [];
var hiphips = ["Hooray!","Hooray!!","Jef Epstien didn't kill himself!!!"]
//for loop cycles until the end of array
for(x of hiphips){console.log("PERSON: HIP HIP!!! \n" + "ME:" + x + "\n")}

var count2 = -3;
for(i=0; i < count2; i++){console.log("Number:" + abs(count2))}

var classRating = 100
var partOfStatement = "This class is "
switch(classRating){
    case 60:
        //logic 
        console.log(partOfStatement + "not good enough.");
        break
    case 100:
        //logic 
        console.log(partOfStatement + "one hundred!!!");
        break
    default:
        //last but naw breaks *cheeky* 
        console.log("We learned about Sawcrates... Be cool to one another...");
}

var ending = ["That's all folks", "\n The End"];
var count3 = 0;
//don't check "while" until the "do" statement has already executed
do{
console.log(ending[count3]);
count3++
}while(count3 != 2);

