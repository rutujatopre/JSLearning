function expression( gradScore , hscScore , sscScore, candidateName){
    if(gradScore<0 || gradScore>100 || (typeof gradScore != "number")) 
    {
       return `Grand Score is ${gradScore} is invalid ,Please provide valid score for ${candidateName}`
    }
    if(hscScore<0 || hscScore>100 ||(typeof hscScore != "number")) 
    {
       return `HSC Score is ${hscScore} is invalid ,Please provide valid score for ${candidateName}`
    }
    if(sscScore<0 || sscScore>100 ||(typeof sscScore != "number")) 
    {
       return `SSC Score is ${sscScore} is invalid ,Please provide valid score for ${candidateName}`
    }
    if (typeof candidateName!= "string")
    {
      return `Invalid candidate name`;
    }
    if(gradScore >= 70 || hscScore >= 80 || sscScore >90)
    {
      var result=`Congrats ${candidateName} you are eligible for TCS interview`;
      return result;
    }
    else
    {
      var result =`Unfortunatly ${candidateName} you are not eligible for TCS interview`;
    return result;
    }
}
var eligible = expression(80 , 86 , 90 ,"Rutuja");
console.log(eligible);
var eligible = expression(70 , 65 , 55 ,"Umakant");
console.log(eligible);
var eligible = expression(60 , 79 , 88 , "Shubhangi");
console.log(eligible);
var eligible = expression(-22 , 55 , -35 , "Ram");
console.log(eligible);
var eligible = expression(60 , "79" , 88 , "Mayur");
console.log(eligible);
var eligible = expression(-3 , 45 , 103 , "Priya");
console.log(eligible);
var eligible = expression(7, 112, 19 , "Diya");
console.log(eligible);
var eligible = expression(77 , 99 , 666 , "Krishna");
console.log(eligible);






