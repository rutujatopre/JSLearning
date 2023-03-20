console.log('Fibonacci Series:');
arryOfSeries = [ ];
function fibonacci (number){
let n1 = 0, n2 = 1;
    for (let i = 1; i <= number; i++) {
    let nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    arryOfSeries.push(n1);
   }
}
const result = fibonacci(10);
let result1 = arryOfSeries.join(' , ')
console.log(result1);



console.log('------------------------------------------');
console.log("Prime numbers from given number upto given number");
let count=0
let i,j 
function primeNo(num){
for(j=2;j<=num;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
}
}

