console.log(myName);//if we are able to access the variable is called hoisting (var)
//console.log(age); //it will show error bcoz it decleared by let(block scope)
var myName = "Virat Kohli";
let age =33;


show();//allow to access(functionSs are hoisting)
function show(){
    console.log("show() function");
}

//greet();//not  allow to access (function expression are not hoisting)
var greet = function(){
    console.log("Good Morning");
}
greet();

//greet();//not  allow to access (function expression are not hoisting)
let greet1 = function(){
    console.log("Good Morning");
}
greet1();





