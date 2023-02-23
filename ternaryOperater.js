function greaterNumber(num1,num2){
    console.log(`Given numbers are:${num1} ${num2}`)
    var greater = num1 > num2 ? num1 : num2; 
    console.log(`Greater number is: ${greater}`);

}
greaterNumber(10, -10);
greaterNumber(800,899);
console.log("-------------------------------");

function isEvenOrOddNum(num){
    console.log(`Given number is: ${num}`);
    var result = num % 2== 0 ?"True":"False";
    console.log(`IS given number Even or odd? ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("-------------------------------");

function wordLength(word){
    var res = word.length % 2 ==0 ? "EVEN" : "ODD";
    console.log(`Word '${word}' has ${res} length`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");

