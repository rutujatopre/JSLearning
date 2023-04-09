

const array =[3,4,5,6,1];
           //[5,6,7,8,3];
console.log("Using forEach ()");
const arrayTransform =[];           
array.forEach(currentvalue  => {
    arrayTransform.push(currentvalue+2);
});
console.log(arrayTransform);


console.log("Using map()");
const arrayNew = array.map((element)=>{
   return element +2;
});
console.log(arrayNew);


const arrayOfNames =["Amar satpute", "Rutuja Pawar" ,"Nayan", "Madhulika"];
const arrayOfNamesTransform = arrayOfNames.map((element) =>{
    return element.length;
});
console.log(arrayOfNamesTransform);






