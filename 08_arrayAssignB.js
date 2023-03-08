
 let arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
 
 console.log(`---------- 1 ----------`);
 console.log(`Total elements in array: ${arrayNumber.length} `);

 console.log(`---------- 2 ----------`);
 let firstNo = arrayNumber[0];
 console.log(`First element in array is: ${firstNo}`);

 let lastNo = arrayNumber[arrayNumber.length-1];
 console.log(`Last element in array is: ${lastNo}`);

 console.log(`---------- 3 ----------`);
 let last3No = arrayNumber[arrayNumber.length-3];
 console.log(`Third last number is: ${last3No}`);

 console.log(`---------- 4 ----------`);   
 let index = 0
 console.log(`Even numbers in arry are:`);
 array1 =[];
 
 while (index < arrayNumber.length)
 {
     const element = arrayNumber[index]
     if(element %2 == 0)
     {
        //console.log(element);
        array1.push(element);

     }
     index++;
}
let result1 = array1.join(' , ')
console.log(result1);

console.log(`---------- 5 ----------`);
let i = 0
array2= [];
console.log(`Odd numbers in arry are:`);
 while (i < arrayNumber.length)
 {
     const elements = arrayNumber[i]
     if(elements %2 !== 0)
     {
       // console.log(elements);
       array2.push(elements);       
     }
     i++;
}
let result2 = array2.join(' , ');
console.log(result2);

console.log(`---------- 6 ----------`);
let sum = 0;
let i1 = 0;
while (i1<arrayNumber.length)
{
     if(i1 % 2 == 0)
   {
      sum = sum + arrayNumber[i1];
   }
   i1++;
}
console.log(`Sum of even position elements is: ${sum}`);

console.log(`---------- 7 ----------`);
let sum1 = 0;
let i2 = 0;
while (i2<arrayNumber.length)
{
      if(i2 % 2 !== 0)
   {
      sum1 = sum1 + arrayNumber[i2];
   }
   i2++;
}
console.log(`Sum of odd position elements is: ${sum1}`);

console.log(`---------- 8 ----------`);
let totalSum = sum + sum1;
console.log( `sum of all elements in array is : ${totalSum}`);

console.log(`---------- 9 ----------`);
console.log(`Elements multiple of 5 are: `);
let i3 = 0;
arraynew =[];
while (i3<arrayNumber.length)
{
   const elementMulti5 = arrayNumber[i3];   
   if(arrayNumber[i3] % 5 == 0)
   {
      //console.log(arrayNumber[i3]);
      arraynew.push(i3);
   }
   i3++;
}
console.log(arraynew);


console.log(`---------- 10 ----------`);
const is115Available = arrayNumber.includes(115);
console.log(`Is 115 available in array : ${is115Available}`);

console.log(`---------- 11 ----------`);
const is23Available = arrayNumber.includes(23);
console.log(`Is 23 available in array : ${is23Available}`);

console.log(`---------- 12 ----------`);
arrayNumber.splice(3, 0 , 55, 66);
console.log(arrayNumber);

console.log(`---------- 13 ----------`);
arrayNumber.splice(4,3);
console.log(arrayNumber);











     
 



