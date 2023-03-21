const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108,89,-601];
console.log("1. Array elements with its index-----------");
arrayNumbers.forEach((element, index) => {
    console.log(`Index : ${index} , Element : ${element}`);
});

console.log(" ");
console.log("2. Positive Numbers--------------");
let array1 =[];
arrayNumbers.forEach(element => {
    if(element > 0){
        array1.push(element);
     }
});
console.log(array1);

console.log(" ");
console.log("3. Negative Numbers--------------");
let array2 =[];
arrayNumbers.forEach(element => {
    if(element < 0){
        array2.push(element);
     }
});
console.log(array2);

console.log(" ");
console.log ("4. Even numbers --------------");
let array3 =[];
arrayNumbers.forEach(element => {
    if (element % 2== 0) {
        array3.push(element);
    }
});
console.log(array3);

console.log(" ");
console.log("5. sum of elements-------------");
let total = 0;
arrayNumbers.forEach(element => {
    total = total + element;
});
console.log(`Sum = ${total}`);

console.log(" ");
console.log("6. Even indexed array value-----------");
let array4 = [];
arrayNumbers.forEach((element, index) => {
    if(index % 2 ==0){
      array4.push(element);
    }
});
console.log(array4);
