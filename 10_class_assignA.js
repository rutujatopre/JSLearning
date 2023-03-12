console.log(`--------------------------------- First ------------------------------`);

class Vehicle
{
    constructor(name , color, engine, prize, avarage)
    {
      this.name = name;
      this.color = color;
      this.engine = engine;
      this.prize = prize;
     this.avarage = avarage;
    }
}
const nexon = new Vehicle("Nexon EV" , "White", "Petrol" ,"13 lakh" , "80 kmpl");
const vagonR = new Vehicle("VegonR" , "Red", "Petrol", "7 lakh","23.56kmpl" );
const thar = new Vehicle("Thar", "Black" ,"Disel" ,"11 lakh", "15kmpl");
const creta = new Vehicle("Hyundai Creta", "Blue", "Petrol","15 lakh", "16kmpl");
const baleno = new Vehicle("Maruti Baleno", "Brown", "Petrol", "8 lakh" ,"22.58kmpl");

let arrayOfVehicle = [nexon, vagonR, thar, creta, baleno ];
for(i=0; i<arrayOfVehicle.length ; i++)
{
   const element = arrayOfVehicle[i];
   console.log(element);
}

console.log(`--------------------------------- Second ------------------------------`);
class College
{
   constructor(collegeName, location, course, id, naacGrade)
   {
      this.collegeName = collegeName;
      this.location = location;
      this.course = course;
      this.id = id;
      this.naacGrade = naacGrade;

   }
}
const college1 = new College("GSG", "Umarkhed", "BSC" ,"3456", "A");
const college2 = new College("HVPM", "Amravati", "Yoga", "7869", "A+");
const college3 = new College("Walchand" ,"Solapur", "IT", "4321", "A");
const college4 = new College("Darda" , "Yavatmal", "Entc", "7856", "A");
console.log(college1);
console.log(college2);
console.log(college3);
console.log(college4);

console.log(`--------------------------------- Third ------------------------------`);
let traverseObject = function(result)
{
   for (const key in result ) {
     if (Object.hasOwnProperty.call(result, key))
      {
       const element = result[key];
       //console.log(`College Name: ${collegename}, Location: ${location}, Course:${course}, Id:${id}, Naac Grade:${naacGrade} `);
       console.log('${key},{element}');
     }
   }
};
traverseObject(college2);
console.log("");



