

console.log("------------------- first ----------------");
const show = ()=>{
    console.log(`Good Morning, Today is Monday`);
}
show();

console.log(" ");
console.log("------------------- Second ----------------");

const multiply = (num1, num2, num3=1)=>{
     let result = num1*num2*num3;
     console.log(`Multiplication of three numbers ${num1},${num2},${num3} is: ${result}`);
}
multiply(5,5,2);
multiply(10,4);


console.log(" ");
console.log("------------------- Third ----------------");
const add =(arg1, arg2, arg3, arg4, arg5)=>
{
   let addition = arg1 + arg2 + arg3+ arg4+ arg5;
   return addition;
}
const additionResult = add(100, 100, 200, 349, 756);
console.log(`Addition of 5 numbers is : ${additionResult}`);
const additionResult1 = add(" I am ","learning ","ES6 ","features ","in depth");
console.log(`Concate of given 5 string is: ${additionResult1}`);