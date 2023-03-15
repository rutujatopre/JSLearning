console.log(`=============10_Object_Assignment_B (clonning & merging)========================`);

let bankSbi={
    bankName:'SBI Bank',
    headquater:'Mumbai',
    ifscCode:112233,
    bankLocation:{
street:'FC Raod',
city:'Pune',
pinCode:000111,
numberOfEmp:1000
    }
};

console.log(`------Step 1 (Creating object 'bankSbi' using literals)-------`);
console.log(bankSbi);

console.log(``);
console.log(`------Step 2 (Creating object 'bankLocation' using literals)-------`);
console.log(bankSbi.bankLocation);

console.log(``);
console.log(`------Step 3 (Clonning object 'bankSbi' and 'bankLocation' using 'object.assign()' )-------`);
const clonedBankSbi=  Object.assign({},bankSbi);
const clonedBankSbi1=  Object.assign({},bankSbi.bankLocation);

console.log(`Cloned object using assign operator: Bank Name-${clonedBankSbi.bankName},HD=${clonedBankSbi.headquater} ,IFCS Code =${clonedBankSbi.ifscCode}`);
console.log(``);

console.log(`---------Step 3 (Clonning object 'bankSbi' and 'bankLocation' using 'spread Operator' )--------`);
const bankSbiClone = { ...bankSbi, bankLocation: { ...bankSbi.bankLocation } };
console.log(bankSbiClone);

console.log(``);
console.log(`-------Step 4 ( creating object literals "rateOfInterest")------`);

let rateOfInterest={
    homeLoanInterest :8,
    personalLoanInterest :16,
    dueInterest: 10

}
console.log(rateOfInterest);

console.log(``);
console.log(`-----Step 5  (merging step 1 ,2 and 4 in new object "sbiDetails")----`);
const sbiDetails={...bankSbi, ...bankSbi.bankLocation, ...rateOfInterest}
console.table(sbiDetails);

console.log(``);
console.log(`---------step 6 ( Traverse This merged Objecty Using for in loop)----------`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}:${element}`);
    }
} 
