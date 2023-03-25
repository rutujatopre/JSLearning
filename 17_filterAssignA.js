

const arrayNumbers =[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(".......... 1. Numbers greater than 50 ..........");
const arrayElemetnt = arrayNumbers.filter((currentValue)=>{
    return currentValue >50;
});
console.log(arrayElemetnt);


console.log(".......... 2. Even numbers ..........");
const arrayElemetnt1 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 ==0;
});
console.log(arrayElemetnt1);

console.log(".......... 3. Odd numbers ..........");
const arrayElemetnt2 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 2 == 1;
});
console.log(arrayElemetnt2);

console.log(".......... 4. Numbers Multiple of 5 ..........");
const arrayElemetnt3 = arrayNumbers.filter((currentValue)=>{
    return currentValue % 5 == 0;
});
console.log(arrayElemetnt3);

console.log(".......... 5. Numbers between 20 and 50 ..........");
const arrayElemetnt4 = arrayNumbers.filter((currentValue)=>{
    return currentValue>20 && currentValue<50;
});
console.log(arrayElemetnt4);