
const arrayOfNames = [ "Ratan", "Elon", "Billgates","PT Usha", "Murmu"];
console.log(arrayOfNames);
console.log("-------------After sorting-----------------");
const sortedarrayOfNames = arrayOfNames.sort();
console.log(sortedarrayOfNames);//sorting by ascending order
sortedarrayOfNames.reverse();
console.log(sortedarrayOfNames);//sorting in decending order

console.log(" --------Array is mmutable means we can add elements in it---------");
sortedarrayOfNames.push("Sunder");
console.log(arrayOfNames);//shallow array
console.log(sortedarrayOfNames);

console.log("--------String is immutable-----------");
const student ="Avinash";
student[1]="W";// string is immutable means we can not change letter of string
console.log(student);// we will get same output


console.log("-----------Sorting numbers-------------");
const array =[5, 6, 3, 44, 104, 302, 15];
console.log(array);
array.sort();//it will compare only first digit of numbers
console.log(array);
array.sort( (a,b)=>{
    return a>b ? 1: -1;//custum logic to sort elements in ascending order
});
console.log(array);
array.reverse();//decending order
console.log(array);

//custum logic  for decending order
array.sort( (a,b)=>{
    return a>b ? -1: 1;//decending order
});
console.log(array);




