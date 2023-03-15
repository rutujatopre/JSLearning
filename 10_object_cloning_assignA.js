
const bankSbi={
    bankName: "SBI",
    location: "Pune",
    accountNo: 223344,
    branchCode: "SBI123",
}

const bankLocation={
    street: "Biyani path",
    city: "Nagpur",
    pinCode: 445206,
}


console.log(`----------cloning step1 and step 2 using object assign()---------- `);
const clonebank = Object.assign(bankSbi, bankLocation );
console.log( clonebank);
console.log("");

console.log(`----------cloning step1 and step 2 using spreed operator---------- `);
const newBankSbi = {...bankSbi};
const newBankLocation = {...bankLocation};
console.log(newBankSbi, newBankLocation);



