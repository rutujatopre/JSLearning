console.log(`--------------- First ---------------`);

function maleMarriageEligibility(gender , age, boyName){
    if(gender == "male" && age >=21)
    {
      console.log(`Hey ${boyName} you are eligible fo marrige`);
    }
    else
    {
      console.log(`Hey ${boyName} you are not eligible fo marrige`);
    }
}    
var result = maleMarriageEligibility("male" , 25 , "Billgates" );
var result = maleMarriageEligibility("male" , 17 , "Stew Jobs" );


console.log(`--------------- Second ---------------`);

function femaleMarriageEligibility(gender , age, girlName){
    if(gender == "female" && age >=18)
    {
      console.log(`Hey ${girlName} you are eligible for marrige`);
    }
    else
    {
        console.log(`Hey ${girlName} you are not eligible for marrige`);
    }
}    
 femaleMarriageEligibility("female" , 16 , "Jenifer" );
 femaleMarriageEligibility("female" , 27 , "Malinda Gates" )



