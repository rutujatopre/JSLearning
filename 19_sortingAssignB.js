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


const arrayEmployees = [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("------------- Sorting Employees in ascending order by its ID's-----------------");
const arrayEmpId = arrayEmployees.filter((element)=>{
    return element.emp_id;
})
const arraySortId = arrayEmpId.sort( (id1,id2)=>{
    return id1.emp_id > id2.emp_id ? 1: -1;
});
arraySortId.forEach(element => {
    console.log(`Employee ID: ${element.emp_id} , Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}`);
});


console.log(" ");
console.log("------------- Sorting Employees in ascending order by its department-----------------");
const arrayEmpDept = arrayEmployees.filter((element)=>{
    return element.emp_dept;
})
const arraySortDept = arrayEmpDept.sort( (d1,d2)=>{
    return d1.emp_dept > d2.emp_dept ? 1: -1;
});
arraySortDept.forEach(element => {
    console.log(`Employee ID: ${element.emp_id} , Employee Department: ${element.emp_dept} , Employee Comapny: ${element.emp_company}`);
});


console.log(" ");
console.log("------------- Sorting Employees in decending order by its salary -----------------");
const arrayEmpSal = arrayEmployees.filter((element)=>{
    return element.emp_salary;
})
const arraySortSal = arrayEmpSal.sort( (s1,s2)=>{
    return s1.emp_salary > s2.emp_salary ? -1: 1;
});
arraySortSal.forEach(element => {
    console.log(`Employee Name: ${element.emp_name} , Employee Salary: ${element.emp_salary} , Employee Comapny: ${element.emp_company}`);
});





