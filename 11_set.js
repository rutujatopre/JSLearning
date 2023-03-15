
const setOfNumbers = new Set();
setOfNumbers.add(2);//to add elements
setOfNumbers.add(3);
setOfNumbers.add(8);
setOfNumbers.add(2);
setOfNumbers.add(9);
setOfNumbers.add(3);
console.log(setOfNumbers);

console.log(setOfNumbers.size);//to know size of set
console.log(setOfNumbers);

setOfNumbers.delete(8);//to delet element
console.log(setOfNumbers);

//setOfNumbers.clear();//to clear all elements
//console.log(setOfNumbers);

console.log(`Traversing set`);
for (const element of setOfNumbers) {
    console.log(element);   
}











