function factorialOfWordsCount(string)
{
 
 if(string==null||string==undefined || (isNaN(string) && typeof string=="number"))
 {
   console.log(`Given string ${string} is invalid, please entre valid data`);
   return;
 }
 else
 {
   
   let fact = 1;
   let word = string.split(" ");
   let length = word.length;
    for (let i = 1; i <= word.length; i++) 
    {
        fact =fact * i;
    }
    console.log(`Given string is ${string}`);
    console.log(`Word count of given string is ${word.length} . The factorial of words count is ${fact}.`);
  }
}
factorialOfWordsCount("Revision is the mother of sucess");
factorialOfWordsCount(null);
factorialOfWordsCount("");
factorialOfWordsCount("Rutuja Bhushan Topre");
factorialOfWordsCount("We never fail, we always learn");


