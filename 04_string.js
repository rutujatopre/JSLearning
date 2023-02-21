var greet ="Goog Morning";
console.log(typeof greet);
console.log("Total number of chars available into this string variable - greet");
var greetLength = greet.length;
console.log("Total legth of string is:",greetLength);

console.log("Find the characture by index value");
var greetIndex3 = greet.charAt(3);
console.log("Characture available at index 3 is:",greetIndex3);

console.log("Find last characture");
var charAtLastIndex = greet.charAt(greetLength-1)
console.log("Last char is:",charAtLastIndex);

console.log("Find Index by character value");
var indexOfM = greet.indexOf('M');
console.log("Index of char M is:",indexOfM);

console.log("Index of char which is not available into the string:",greet.indexOf('z'));

console.log("Index of o char:",greet.indexOf('o') );
console.log("Index of o char using lastIndexof(): ",greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning" ,"Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper case:",replaceResult.toUpperCase());
console.log("Lower case:",replaceResult.toLowerCase());

var myName = "   Rutuja   Mahajan    ";
var myNameAfterTrim = myName.trim();
console.log("Removing extra start and end space using trim():",myNameAfterTrim , myName.length , myNameAfterTrim.length);

console.log("Find total extra space removed from the string-myName");
var count = myName.length - myNameAfterTrim.length;
console.log(count);

console.log("include()")
console.log("Is this substring is available in the string:",greet.includes("Mor"));
console.log("Is this substring is available in the string:",greet.includes("Aft"));
console.log("Is this substring is available in the string:",greet.includes("o"));


console.log("Slice()");
var sliceResult = greet.slice(5 ,12);
console.log(sliceResult);
console.log(greet.slice(2,7));

console.log("Split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words:",splitResult.length);
console.log("Type Of split Result:", typeof splitResult)

var myFriendList = " Rutuja Topre ,Rashmi Lawhande , Vrushabh mahajan, Sunita, Manohar, Sathish, Bhushan, Presheet, Sanika,Sumeet,Darshan ";
var frdList = myFriendList.split(",");
console.log(frdList);
console.log(frdList.length);





