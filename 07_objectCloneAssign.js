
console.log(`The Given Array is: [20,3,4,56,90,400,49]`);

console.log(`=========Step 1: Shollow clone of given Array ==========)`);
const arrayNumber=[20,3,4,56,90,400,49];
const newArray=arrayNumber;//shallow clone 
console.log(newArray);

console.log(`-----------updated clone with values 55,66-------------`);
newArray.push(55,66);
console.log(newArray);

console.log(`==========Step 2: step Clonning using spread operator=========`);
const arrayOfNumber=[20,3,4,56,90,400,49];
const clonedArray=[...newArray]
console.log(`-------Deep Clonned Array using spread operator-------`);
console.log(clonedArray);
console.log(`------updated array with values 10,25 at last position------`);
arrayOfNumber.push(10,25);
console.log(arrayOfNumber);

console.log(`==========Step 3. Deep Clonning using spread operator=========`);
array=[2,30,14,8];
console.log(`Given new array is: ${array}`);
const concatArray = [...arrayNumber , ...array ];
console.log(`Concated two array using spread operator is : ${concatArray}`);

console.log(`==========Step 4: Creating Employee Information Object=========`);
const employee_info={
    emp_id:27,
    emp_name:"John Sena",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        june_month:"65,0000INR"
    },
address:{
    locality:{
        colony:"OM Vrindavan Society",
        street:"Kanch Pokli, 431202",
    },
city:"Mumbai",
state:"maharashtra",
country:"india"

},
mobiles:["+91 8600 3456 88","1800 4567 32","+91 9096 5678 77"]

}


console.log(`----Address of employee---- `);
console.log(employee_info.address.locality.colony);
console.log(employee_info.address.locality.street);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);

console.log(`----Mobile Number of employee---- `);
console.log(employee_info.mobiles);

console.log(`===========Step 6: perform deep copy using JSON.stringfly() =========`);

const copiedSalary = JSON.parse(JSON.stringify(employee_info.salary));
console.log(employee_info.salary,copiedSalary);

console.log(`-------`);
const updateSalary=employee_info.salary.july_month="80,000INR"
console.log(`July Month Updated Salary on cloned object : ${updateSalary}`);

console.log(`-------`);
const updateCountry=employee_info.address.country="United Kingdom"
console.log(` Updated Country of an employee on cloned object : ${updateCountry}`);

console.log(`-------`);
console.log(`Original Value of Employee : ${employee_info.emp_name},${employee_info.salary.july_month},${employee_info.address.country}`);

console.log(`-------`);
console.log(`Upadated vaule of Employee Object: ${employee_info.emp_name}, ${updateSalary},${updateCountry}`);

