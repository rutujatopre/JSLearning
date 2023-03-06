

let arryOfNumbers = [0,1,2,3,4,5,6,7,8];
console.log(arryOfNumbers);
//console.table(arryOfNumbers);
let totalArryElements = arryOfNumbers.length;
console.log(`Total elements available in arry is: ${totalArryElements}`);

const is8Available = arryOfNumbers.includes(8);
console.log(`Is 8 available : ${is8Available}`);

const is9Available = arryOfNumbers.includes(9);
console.log(`Is 9 available : ${is9Available}`);

const indexOf8 = arryOfNumbers.indexOf(8);
console.log(`Index of elements 8 is: ${indexOf8}`);

const indexOf100 = arryOfNumbers.indexOf(100);
console.log(`Index of elements 100 is: ${indexOf100}`);

let arryOfNumber = [10 , 20, 25, 15, 30, 5];
const valueAtIndex2 = arryOfNumber[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arryOfNumber[3] = 35;//replace index at 3 (25 into 35)
console.log(arryOfNumber);

arryOfNumber[1] = 50;//replace index at 1(10 into 50)
console.log(arryOfNumber);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
console.log(`----- Adding Element in the last using Push()-----`);
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log(`----- Adding Element in the First using unshift()-----`);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers);
console.log(`----- Removing last element using Pop()-----`);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log(`----- Removing first element using shift()-----`);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 30, 5, 40, 45];
console.log(`----- Slice(startIndex) -----`);
const arrayFromIndex3 = arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);

console.log(`----- Slice(startIndex , endIndex) -----`);
const subarray = arrayOfNumbers.slice(2 , 5);
console.log(subarray);

console.log(`---------------------------------------`);
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(`----- splice (startIndex) -----`);
const splicedArry = arrayOfNumbers.splice(3);
console.log(`Removed elements from array is: ${splicedArry}`);
console.log(arrayOfNumbers);


var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
console.log(`----- splice (startIndex , deletCount)-----`);
const splicedArryWithDeletedCount = arrayOfNumbers.splice(2 , 2);
console.log(`Removed elements using delet count from array is: ${splicedArryWithDeletedCount}`);
console.log(arrayOfNumbers);

var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3 , 1);
console.log(`After removing 15: ${arrayOfNumbers}`);


console.log(`----- splice() to insert more element without replacing existing elements -----`);
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
//insert 5, 35, 55 at index 4
arrayOfNumbers.splice(4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log(`----- splice()  replacing existing one elements -----`);
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
//replace 25 by 50, 60
arrayOfNumbers.splice(2, 1, 50, 60);
console.log(arrayOfNumbers);










