
var vowels = function (str)
{
   console.log(str);
     var vowelsCount = 0;
     var string = str.toLowerCase();
   for (var i = 0; i <= string.length - 1; i++)
   {
       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u")
      {
       vowelsCount += 1;
      }
   }   
   return vowelsCount;
 }
 var result = vowels("JavaScript is the language of Internet");
 console.log(`Number of vowels are : ${result}`);
 var result = vowels("I am anguler developer");
 console.log(`Number of vowels are : ${result}`);
 var result = vowels("Hard work and commitment is the key of success");
 console.log(`Number of vowels are : ${result}`);


 console.log(`_______________________Second________________________`);
 function lastWordCharsCount(string)
 {
   console.log(`Given string is:${string}`);
   let lastWord=""; 
   for (let index=string.length-1 ; index>=0 ;index--)
   {
     let char =string.charAt(index);  
     
     if(char ==" ")
        {
             break;
        }
        lastWord = lastWord + char;
          
   }
   return lastWord.length;
   
 }
var result = lastWordCharsCount("JavaScript is the language of Internet");
 console.log(`Total characture in last word : ${result}`);
 var result = lastWordCharsCount("I am anguler developer");
 console.log(`Total characture in last word : ${result}`);
  var result = lastWordCharsCount("Hard work and commitment is the key of success");
 console.log(`Total characture in last word : ${result}`);

 



