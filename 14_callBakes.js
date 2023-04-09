

function doAssignment (callBack){
    console.log(`Solving assignment`);
    console.log(`Step 1 to 10 all aresolved now`);
    callBack();
}

function copyAssignment (){
    console.log(`Thank you , let me copy assignment`);
    console.log(`Oh finally copid all assignment`);
}
doAssignment(copyAssignment);


function greet(){
    console.log(`Good Morning .......`);
}
//1 sec = 1000 milli second 
// 3 sec = 3000 mili second
setTimeout(greet , 4000);


/*in java script function is called first class citizen
1. we can call one function as arrgument of function
2. we can store value of funtion in variable
3.we can return function from another function */


function firstClass(){
    console.log(" We can return function from another function");
    function innerFunction(){
        console.log("Inner Function");
    }
    return innerFunction;
}
const value = firstClass();
console.log(value);


function firstClass(){
    console.log(" We can return function from another function");
     return function()//anonimous function 
     {
        console.log("Inner Function");
    }
}
const value1 = firstClass();
console.log(value);


