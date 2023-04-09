
let student ={
    firstName : "Virat",
    lastName: "Kohli",
    isWorking: true,
    age:22,
    collegeName: "ABS",
    id: 12345
}
//let firstName = student.firstName;
//let isWorking = student.isWorking;
//let age = student.age;
//let collegeName = student.collegeName;

let {firstName, isWorking, age, collegeName, id , city="Pune"} = student; // object distructuring
console.log(`Extracted values from object is: firstName ${firstName}, isWorking ${isWorking}, age ${age} ,collegeName ${collegeName}, id ${id},city ${city}`);

//Array distructuring
const array =[ 5, 6,7,8,9];
let [ num1, num2, num3] = array;
console.log(num1, num2, num3);

const array1 =[ 5, 6,7];
let [ no1, no2, no3 ,no4=0 , no5] = array1; //Array distructuring with default value
console.log( no1, no2, no3 ,no4, no5);

