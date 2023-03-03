/*function factorialOfWordsCount(string)
{
 let word = string.split(" ");
 let length = word.length;
 if(word.length == 0)
 {
   console.log(`Invalid data, please entre valid data`);
   return;
 }
 else
 {
   let fact = 1;
    for (let i = 1; i <= word.length; i++) 
    {
        fact =fact * i;
    }
    console.log(`Word count of string is ${word.length} . The factorial of words count is ${fact}.`);
  }
}
//factorialOfWordsCount("Revision is the mother of sucess");
//factorialOfWordsCount("We never fail, we always learn");
factorialOfWordsCount(null);
//factorialOfWordsCount("Rutuja Bhushan Topre");
*/
function factorialOfWordsCount(string)
{
  if(string == null)
  {
    console.log(`Passed value is null, Please input valid value`);
  }
  else if (string <= 0)
  {
    console.log(`Passed value is invalid, please entre valid value`);
  }
  else 
  {
    let word = string.split(" ");
    let length = word.length;
    if(word.length < 0)
    {
         console.log(`Invalid data, please entre valid data`);
    }
    else
    {
        let fact = 1;
        for (let i = 1; i <= word.length; i++) 
        {
            fact =fact * i;
        }
        console.log(`Word count of string is ${word.length} . The factorial of words count is ${fact}.`);
    }
  }
}
factorialOfWordsCount("Revision is the mother of sucess");
factorialOfWordsCount('')
factorialOfWordsCount("We never fail, we always learn");
factorialOfWordsCount("Rutuja Bhushan Topre");
factorialOfWordsCount(null);
