'use strict'
//myName = "Virat";// not allowed
let myName= "Virat";
console.log(myName);
//delete myName; //not allowed

 /*person=//not allowed to define an object without var, let and const
 {
    firstName: "virat",
    lastName: "Kohli",
    age: 33
}*/


let person=//not allowed to define an object without var, let and const
 {
    firstName: "virat",
    lastName: "Kohli",
    age: 33
}

const student ={
    rollNo: 4,
    age: 17,
    city: "Pune"
}
//delete.student;       //not allowed
//delete.student.age;  //not allowed

/*function hello(p1,p1) //not allowed same parameters
{
    console.log("Hello");
} */

function show (arg1 , ...arg)//spreed operator
{
    console.log(arg1);
    console.log(arg);
}
show(100,200,300);

function show1 (arg1 , arg2)//spreed operator
{
    if(arg2/2 ==0)
    {
       arg1/1;
    }
    console.log(arg1/arg2);
    
}
show1 (100,200);



