function expression( gradScore , hscScore , sscScore, candidateName){
    var result = (gradScore >= 70 || hscScore >= 80 || sscScore >90) ? `Congrats ${candidateName} you are eligible for TCS interview`:`Unfortunatly ${candidateName} you are not eligible for TCS interview`;
    console.log(result);

}
expression(80 , 86 , 90 ,"Rutuja");
expression(70 , 65 , 55 ,"Umakant");
expression(60 , 79 , 88 , "Shubhangi");

