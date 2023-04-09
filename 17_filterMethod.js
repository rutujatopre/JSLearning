

const array=[3, 4, 5, 6, 90, 50, 1, 44, 77, 30, 78,99];
const newArray = [];
array.forEach((element)=>{
  if(element>=50){
    newArray.push(element);
  }
});
console.log(newArray);


const arrayElemetnt = array.filter((currentValue)=>{
    return currentValue>=50
});
console.log(arrayElemetnt);

console.log("Filter out even numbers");
const arrayElemetnt1 = array.filter((currentValue)=>{
    return currentValue % 2 ==0;
});
console.log(arrayElemetnt1);

console.log("Filter out even numbers");//code in one line using filter method
const arrayElemetnt2 = array.filter(currentValue=> currentValue % 2 ==0);
console.log(arrayElemetnt2);



