var reverseString = function(str)
{
    var reverse = "";//wo
    console.log(`Given string is: ${str}`);
    for (let index =str.length-1 ; index >= 0 ; index--)
    {
        var charAt = str.charAt(index);
        reverse = reverse + charAt ; //"w" + "o" = wo
    }
    return reverse;
}
var result = reverseString("Do it any how");
console.log(`Reverse string is : ${result}`);

console.log(`__________________________________`);

console.log(`Reverse last word`);
var reverseStr = function (str)
{
    var reverse ="";
    for(let index=str.length-1 ; index>=0 ;index--)
    {
        var char = str.charAt(index);
        if(char ==" ")
        {
             break;
        }
        reverse = reverse +char;//w+o
    }
    return reverse;
}
var result = reverseStr("Do it any how");
console.log(`Reverse last word is : ${result}`);

console.log(`__________________________________`);

     
