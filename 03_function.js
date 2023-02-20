var name1="Pragati";
var name2="Swati";

var num1=11;
var num2=22;
function swapVariable(value1,value2){
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swap:",value1,value2);
    return "Swpping variables successfully completed";
}
var swapResult=swapVariable(name1,name2);//function call or function invoke
console.log(swapResult); 
var swapResult2=swapVariable(num1,num2);
console.log(swapResult2); 

function display(num){
    console.log(num);
    var result = typeof num;
    return result;
}
var num1=display(100);
console.log(num1)

//function withno arrguments and no return value
function showFullName(){
    console.log("My full name is Rutuja Topre.");
}
showFullName();//function call

//function with arrguments and no return value
function showAge(age){
    console.log("my age is:",age);
}
showAge(32);

//function with no arrguments and return value
function fullName(){
    var name = "Rutuja Topre";
    return name;
}
var fName =fullName();
console.log(fName);

//function with arrguments and return value
function sumOfNumber(num1, num2, num3){
    var total = num1+num2+num3;
    return total;
}
var sumTotal = sumOfNumber(55,89,67);
console.log("Total is:",sumTotal);
