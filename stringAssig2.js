
function stringHandsOn(){
    var str = "     Hey yor are doing good, keep it up       ";
    console.log(str);
}
stringHandsOn();

var str = "     Hey yor are doing good, keep it up       ";
var strLength = str.length;
console.log("2. Length of the string is:",strLength);
var newstr = str.trim();
console.log("3. Removing extra space from str:", newstr );
console.log("   Length of new string:",newstr.length);
console.log("4. Extra space that removed:", str.length - newstr.length);
console.log("5. First characture:", newstr.charAt(0), "   Last characture:",newstr.charAt(newstr.length -1));
var splitStr = newstr.split(" ");
console.log("6. Total words avalible in string:", splitStr.length);
var indexOf = newstr.indexOf('good');
console.log("7. Index of word good:", indexOf);
var sliceResult = newstr.slice(22 ,32);
console.log("8. Substring starting from index 22:",sliceResult);
console.log("9. Is string ends with word 'up'?",newstr.includes("up"));
console.log("10.Is string starts with word 'Hey' after trimming?",newstr.includes("Hey"));










