// Arithmatic operation of undefined with number, boolean or null gives NaN
let result;
result = 4 + undefined;
console.log(result);//NaN

result = 4 - undefined;
console.log(result);//NaN

result = true + undefined;
console.log(result);//NaN

result = null + undefined;
console.log(result);//NaN

//Numeric string used with + gives string ty
result = '3' + 2;
console.log(result);//"32"

result = '3' + true;
console.log(result);//3true

result = '3' + undefined;
console.log(result);//3undefined

result = '3' + null;
console.log(result);

//If boolean is used, true is 1, false is 0
result = 4 - true;
console.log(result);//3

result = 4 + true;
console.log(result);//5

result = 4 + false;
console.log(result);//4

result = 4 - false;
console.log(result);//4

//numeric string used -,/,* results number type
result = '4' - 2;
console.log(result);//2

result = '4' - '2';
console.log(result);//2

result = '4' * 2;
console.log(result);//8

result = '4' / 2;
console.log(result);//2




