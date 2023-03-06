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