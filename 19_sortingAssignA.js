

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log("_______________Given array is____________________");
console.log(arrayRollNumbers);
console.log("_______________Reversing Given array____________________");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log("_____________Sort() without custom sorting logic_______________");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log("_____________Sort() by ascending order with custom sorting logic_______________");
arrayRollNumbers.sort( (a,b)=>{
    return a>b ? 1: -1;
});
console.log(arrayRollNumbers);
console.log("_______________Greatest number from array____________________");
const greatestNo = Math.max(...arrayRollNumbers)
console.log(greatestNo);
console.log("_______________Smallest number from array____________________");
const smallestNo = arrayRollNumbers[0];
console.log(smallestNo);
console.log("_______________Remove duplicate numbers from array____________________");
function removeDuplicates(arr) {
    let unique = [];
    arrayRollNumbers.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(removeDuplicates(arrayRollNumbers));



