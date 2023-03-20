
function primeNumbers( startValue , totalPrime){
    let count = 0;
    let num = startValue;
    let arrayOfPrime = [];
    while (count <totalPrime) {
        let isPrimeNum = isprime(num);
        if(isPrimeNum){
            count ++;
            arrayOfPrime.push(num);
        }
        num ++;
    }
   console.log(arrayOfPrime);
}

function isprime (num)//to find prime number
{
    for (let index = 2; index < num; index++) {
        if(num% index == 0){
            return false;
        }
        return true;
    }
}
primeNumbers(3 ,10);
primeNumbers(20, 10);
primeNumbers(50 , 15);