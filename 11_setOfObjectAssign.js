
class Bank {
    constructor (bankName, location, account, ifsc, interestRate ){
    this.bankName= bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
    }
}
const sbi_Bank= new Bank ("SBI Bank", "Yavatmal", "62514897564","SBIN0004598", 10.75);
const axis_Bank = new Bank ("Axis Bank", "Pune", "4597863258", "AXIS4567893", 12.5);
const icici_Bank = new Bank ("ICICI Bank", "Bangaleru", "99997858", "ICICI45672343", 8.5);
const kotak_Bank = new Bank ("KOTAK Bank", "Nanded", "5956258", "KOTAK1234893", 9.5);
const hdfc_Bank = new Bank ("HDFC Bank", "amravati", "123598958", "hdfc1234893", 9);
const panjab_Bank = new Bank ("Panjab Bank", "Nagpur", "7859558", "panjab1234893", 8);

console.log(`-------------------- Object using class and initialized using constructor -------------------`);
console.log(sbi_Bank);
console.log(axis_Bank);
console.log(icici_Bank);
console.log(kotak_Bank);
console.log(hdfc_Bank);
console.log(panjab_Bank);
console.log("");

console.log(`-------------------- Transver the set -------------------`);

const setOfBank = new Set();
setOfBank.add(sbi_Bank);
setOfBank.add(axis_Bank);
setOfBank.add(icici_Bank);
setOfBank.add(kotak_Bank);
setOfBank.add(hdfc_Bank);
setOfBank.add(panjab_Bank);


for (const bank of setOfBank) {
    console.log(`Bank Name : ${bank.name}, Location: ${bank.location}`);
    
}

