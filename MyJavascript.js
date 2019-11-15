
refF="";
  
//Position and show
function funHide (htmlObject, element){  
        
        if(refF!="")   
         {
            refF.style.display = "none"; 
        }
       
        htmlObject.style.display = "block";
        refF=htmlObject;
        
            var rect = element.getBoundingClientRect();
            element2 = document.getElementById("myDiv");
            element2.style.top = rect.top + "px";
            element2.style.position="absolute";

    // API Function
    }

function hobbfun(fl){

var xhttp = new XMLHttpRequest();
       
xhttp.onreadystatechange = function() {

if (this.readyState == 4 && this.status == 200) {          
  document.querySelector("#mymainDiv").innerHTML = this.responseText;
}
};                 
switch(fl){
case 1:
xhttp.open("GET", "ajax_hobb.txt", true);
break;
case 2:
xhttp.open("GET", "ajax_stud.txt", true);
break;
case 3:
xhttp.open("GET", "ajax_me.txt", true);

}

xhttp.send();

};
//
//
//Reverse Function:
//function autRev(rs){
//  document.querySelector("#tx1").innerHTML=revString(rs);

//}
function byClick(rs){

document.querySelector("#lb1").innerHTML=revString(rs);
}

function revString(ss){


var rs="";
for(i=ss.length; i>0; i--){
   rs=rs+ss[i-1];
}
return rs;
}


// 
// Factorial Function
function fc(n){
    let m=1;
    let i=0;
if(i>=0) {

if (n == 0 || n == 1){ m=1;}
else {
for (i=n; i>1; i--){
m=m*i;
}
}
} else {
//alert("The formula is not working for negative value!");
document.querySelector("#fcTx1").value="";
}

document.querySelector("#fcTx1").value=m.toString();
}  


// Even-odd function
function oddEven(num) {
document.querySelector("#fcTx2").value= ( num & 1 ) ? "odd" : "even";
}
// Constructor Obj        


function objCons(){

var john=new Person("John",30);

document.querySelector("#consName").innerHTML=john.name;
document.querySelector("#consAge").innerHTML=john.age;

function Person(name, age){
this.name=name;
this.age=age;

}}

//Object Literal

function objName(){
   
var john=new getPerson("John",30);
alert(john.name +" "+john.age);

document.querySelector("#litName").innerHTML="Name: "+john.name;
document.querySelector("#litAge").innerHTML="Age: "+ john.age;

function getPerson(pname, page){

    return {name:pname,     age: page};
    
}
}


// Delete element
function deleteElement(){

let arr=["One","Two", "Three","Four", "Five"];

document.querySelector("#arry").innerHTML=arr+ " ----- Length= "+ arr.length;
delete arr[2];    
document.querySelector("#dnlen").innerHTML=arr + " ------ length= "+ arr.length;
}


// Splice element
function spliceElement(){
let arr=["One","Two", "Three","Four", "Five"];

document.querySelector("#arr").innerHTML=arr+"  ----- Length= "+arr.length;
arr.splice(2,1);    
document.querySelector("#nlen").innerHTML=arr+" ----- Length= "+arr.length;
}

//Substring

function objectProp(){

let student ={
ID:12,
firstName:"John", 
lastName:"Doe", 
age:50
}
var tabstr="";
for (var name in student) {
// name is the name of each property, so:

tabstr=tabstr+name + " = " + student[name]+"<br>";
}
document.querySelector("#objProp").innerHTML=tabstr;
}


function palinD(orStr){
//alert(orStr);
    let trStr="";
    let revStr="";
    orStr=orStr.toLowerCase();
       
    for(i=0; i<orStr.length; i++){

        if (orStr[i]!=" "){

        trStr=trStr+orStr[i];
           
        }
        
    
    }
    for(i=trStr.length-1; i>-1; i--){       
        revStr=revStr+trStr[i];    
    }


        
            document.querySelector("#revStr").innerHTML=(trStr==revStr);
        //    alert("True"+" ,"+ orStr+", "+ trStr+", "+revStr);

        
    }
//position

  
//Date and time update:

var myVar = setInterval(myTimer, 1000);

function myTimer() {
var d = new Date();

document.getElementById("dt").innerHTML ="Today :" + d.toLocaleDateString()+ "  Time :  "+  d.toLocaleTimeString();
}