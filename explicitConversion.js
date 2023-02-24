//string to number

result = Number('324');
console.log(result);//324

result = Number('324e - 1');
console.log(result);//32.4

//Boolean to number
result = Number(true);
console.log(result);//1

result = Number(false);
console.log(result);//0

//Invalid string to number return NaN

result = Number('hello');
console.log(result);//NaN

result = Number(undefined);
console.log(result);//NaN

result = Number(NaN);
console.log(result);//NaN

//Explicit conversion: string to number using + operator
var numberInString = "100";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

//number to string dada type conversion using to string()method

var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);
    






























