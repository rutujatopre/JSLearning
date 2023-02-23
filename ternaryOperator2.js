console.log(`--------------- First ---------------`);
function maleMarriageEligibility(gender , age, boyName){
    var result =(gender == "male" && age >=21) ? `Hey ${boyName} you are eligible for marrige` : `Hey ${boyName} you are not eligible for marrige`;
   return result;
}
var result = maleMarriageEligibility("male" , 25 , "Billgates" );
console.log(result);

var result = maleMarriageEligibility("male" , 17 , "Stew Jobs" );
console.log(result);

console.log(`--------------- Second ---------------`);

function femaleMarriageEligibility(gender , age, girlName){
    var result =(gender == "female" && age >=18) ? `Hey ${girlName} you are eligible for marrige` : `Hey ${girlName}  you are not eligible for marrige`;
   return result;
}
var result = femaleMarriageEligibility("female" , 16 , "Jenifer" );
console.log(result);

var result = femaleMarriageEligibility("female" , 27 , "Malinda Gates" );
console.log(result);
