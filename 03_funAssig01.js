console.log("----------No arrgument No return value----------");
function showFullName(){
    console.log("My full name is Rutuja Topre.");
}
showFullName();

function degree(){
    console.log("My degree is Master in Science.");
}
degree();

function target(){
    console.log("My target is to become success name and frame.");
}
target();

console.log("----------second assigment----------");
function personalDetails(firstName,lastName,collegeName){
    console.log("My personal details are");
    console.log("First name:",firstName);
    console.log("Last name: ",lastName);
    console.log("College name:",collegeName);

}
personalDetails( 'Rutuja' , 'Topre' ,'GSG');

console.log("----------Third assigment----------");
function swapValuedude(value1,value2){
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1=value2;
    value2=temp;
    console.log("After swap:",value1,value2);
}
swapValuedude('Virat','Anushka');
swapValuedude(1000,2000);

console.log("----------Forth assigment----------");
function addThreeValues(value1, value2, value3){
    var add = value1+ value2+ value3;
    return add;
}
var addResult = addThreeValues(10.23, 600, 40);
console.log("Addition:",addResult);
var addResult2 = addThreeValues("Hello  ","Good  ","Morning  ");
console.log("Addition:",addResult2);





