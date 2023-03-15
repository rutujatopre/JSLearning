
const mapOfNumbers =new Map();
mapOfNumbers.set("One" , 1);
mapOfNumbers.set("Two" , 2);
mapOfNumbers.set("Three" , 3);
mapOfNumbers.set("One" , 1);//key can not be duplicate


console.log(mapOfNumbers.size);
console.table(mapOfNumbers);

mapOfNumbers.set("four" , 2)//value can be duplicate
mapOfNumbers.set("Two" , 22);//value will be store latest value i.e. 22
console.table(mapOfNumbers);

console.log(mapOfNumbers.get("Two"));//to get value of key
mapOfNumbers.delete("Two");
console.log(`After delet : ${mapOfNumbers.size}`);

console.log(mapOfNumbers.has("Two"));//is present in map or not



const valuesOfMap = mapOfNumbers.values();//gives all values in map
console.log(valuesOfMap);

const keysOfMap = mapOfNumbers.keys();//gives all keys in map
console.log(keysOfMap);
for (const key of keysOfMap)//traversing map
{
    console.log(key, mapOfNumbers.get(key));
}








