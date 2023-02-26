
console.log("-------------------------------");

function isEvenOrOddNum(num){
    if (num % 2== 0 )
    {
      console.log(`IS given number ${num} is Even.`);
    }   
    if (num % 2 !=0 )
    {
        console.log(`IS given number ${num} is Odd.`);
    }
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("-------------------------------");

function voteEilligibility(age){
    if (age >=18)
    {
       console.log(`Person having ${age} age is elligible for voting.`);
    }
    else
    {
        console.log(`Person having ${age}  age is  not elligible for voting.`);
    }
}
voteEilligibility(44);
voteEilligibility(10);
voteEilligibility(18);
voteEilligibility(2);
console.log("-------------------------------");


function wordLength(word){
    if(word.length % 2 ==0 )
    {
       console.log(`Word '${word}' has EVEN length`);
    }
    else
    {
       console.log(`Word '${word}' has ODD length`);
    }
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");




