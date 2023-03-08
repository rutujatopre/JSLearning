console.log(`---------- First ----------`);
function squareOfWordLength(str){
    console.log(`String is: ${str}`);
    var strLength = str.length;
    console.log(`Length of string is: ${strLength}`);
    var strSquare = strLength ** 2;
    console.log(`Square of length of string: ${strSquare}`);
    console.log(`-------------------------------`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Crome");
squareOfWordLength("Developer Smart");

console.log(`---------- Second ----------`);
function string(){
    var string = "I am Anguler Developer";
    console.log(`Given string is: ${string}`);
    var length = string.length;
    console.log(`Length of string is: ${length}`);
    var totalWords = string.split(" ").length;
    console.log(`Total number of words are: ${totalWords}`);
    
    
    console.log(`String length divided by total number of words: ${length / totalWords}`); 
    console.log(`String length multiply by total number of words: ${length * totalWords}`); 
    //var division = length / totalWords;
    //var multiplication = length * totalWords;
    //console.log(`String length divided by total number of words: ${division}`); 
    //console.log(`String length multiply by total number of words: ${multiplication}`); 
}
string();
