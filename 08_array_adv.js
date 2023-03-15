
const arrayOfNames = ["Anil", "Sunil", "Sita" , "Bill", "Elon"];
const  result =arrayOfNames.join(" , ");// join element with diffrent symbol
console.log(result);
console.log(typeof result);

console.log(`Resize an array`);
console.log(arrayOfNames.length);
arrayOfNames.length=3;
console.log(arrayOfNames.length);
console.log(arrayOfNames);
arrayOfNames.length=7;
console.table(arrayOfNames);

const array = [3,4,5,6,7,2,4,5];
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element);
    
}
console.log(setOfElements);
console.table(setOfElements);

const mySet = [...new Set(array)];
//const arrayOfUnicElement = [...mySet]// or method to seperate element
console.log(mySet);
console.table(mySet);
 













