console.log("----------First ---------");
var sweety="Sweety" , cutie="Cutie", handsome;
function swapVariable(value1,value2){
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swap:",value1,value2);
    return "Swpping variables successfully completed";
}
swapVariable(sweety,cutie);


var num1 =100, num2 =200, num3 =300, num4;
console.log("Number1=",num1);
console.log("Number2=",num2);
console.log("Number3=",num3);
num4=num1;
num1=num2;
num2=num3;
num3=num4;
console.log("Number1=",num1);
console.log("Number2=",num2);
console.log("Number3=",num3);