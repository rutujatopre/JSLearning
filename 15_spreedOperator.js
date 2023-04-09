
//spreed operator ...
const array =[1, 2, 3, 5, 8, 9];
console.log(array);
console.log(...array);


const student ={
    fullName : "Ajay Sonawane",
    age: 23,
    city: "Bergan"
}
console.log(student);

//------- Rest Parameter--------
function show(argu1 , ...argu){
      console.log(argu1, argu);
}
show(2, 4, 6, 8, 9);


