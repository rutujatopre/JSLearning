console.log(`------------ First ----------`);
function voteEligibility(age)
{
 if ( age <0 || age> 100 || age == undefined || age == null)
 {
     console.log(`Invalid age ${age}`) ;
     return 
 }
   if (age >= 18)
  {
   console.log(`Person having age ${age} is eligible for voting`);
  }
 else
  {
    console.log(`Person having age ${age} is not eligible for voting`);
  }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log(`------------ Second ----------`);
function gradeCalculation(marks)
{
  if(marks>=90){ console.log(`Fanstastic marks: ${marks},Your grade is A+`); }
  if(marks>=75 && marks<90){console.log(`Excellent marks: ${marks},Your grade is A`);}
  if(marks >=50 && marks<75){console.log(`Good marks: ${marks},Your grade is B`);}
  if(marks>= 35 && marks<50){console.log(`Marks is: ${marks},Your grade is C, Need improvement`);}
  if(marks<=0 || marks>100 || (typeof marks!== 'number'))
  {console.log(`${marks} is not valid marks, Please provide valid marks`);}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);













