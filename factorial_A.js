function factorialOfNum(num)
{
    if (num ===undefined)
    {
     console.log(`you have entre invalid data 'undefined', please entre valid number`);
     return;
    }
    else{
        if(num==null)
        {
             console.log(`you have entre invalid data 'null', please entre valid number`);
             return;
        }
    }

     let fact = 1;
    for (i = 1; i <= num; i++) 
    {
        fact =fact * i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
    
    
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);





