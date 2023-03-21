class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const array_employees = [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("1. TCS employees details-----------------------------------");
array_employees.forEach(employees => {
    if(employees.emp_company == "TCS")
    {
        console.log(`Name of employee ${employees.emp_name} , Comapany: ${employees.emp_company} `);
    }
});

console.log(" ");
console.log("2. Employees with salary greater than 50000 -----------------------------------");
array_employees.forEach(employees => {
    if(employees.emp_salary >= 50000)
    {
        console.log(`Id: ${employees.emp_id}, Name: ${employees.emp_name} ,Department: ${employees.emp_dept}, Salary: ${employees.emp_salary}, Comapany: ${employees.emp_company}`);

    }
    
});

console.log(" ");
console.log("3. Sum of all employees salary -----------------------------------");
let totalSalary = 0;
array_employees.forEach(employees => {
    totalSalary = totalSalary + employees.emp_salary;
});
console.log(`Sum = ${totalSalary}`);

console.log(" ");
console.log("4. Avarage Salary of employees-----------------------------------");
let average;
array_employees.forEach(employees => {
     average = totalSalary / array_employees.length;
});
console.log(`Avarage salary = ${average}`);


console.log(" ");
console.log("5. ---------------------------------------------------------");
array_employees.forEach(employees => {
    if((employees.emp_dept=="IT" || employees.emp_dept =="HR") && employees.emp_salary >=75000 ){
        console.log(`Id: ${employees.emp_id}, Name: ${employees.emp_name} ,Department: ${employees.emp_dept}, Salary: ${employees.emp_salary}, Comapany: ${employees.emp_company}`);

    }
});


