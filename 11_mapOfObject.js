class Bank {
    constructor (bankName, location, account, ifsc, interestRate ){
    this.bankName= bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
    }
}
const sbiBank= new Bank ("SBI Bank", "Wakad", "62514897564","SBIN0004598", 10.75);
const axisBank = new Bank ("Axis Bank", "Pune", "4597863258", "AXIS4567893", 12.5);
const yesBank = new Bank ("Yes Bank", "Bangaleru", "99997858", "yes45672343", 8.5);
const hdfcBank = new Bank ("HDFC Bank", "Nanded", "5956258", "hdfc1234893", 9.5);

const mapOfBank = new Map();
mapOfBank.set("SBI_11" , sbiBank);
mapOfBank.set("AXIS_22" , axisBank);
mapOfBank.set("YES_33" , yesBank);
mapOfBank.set("hdfc_44" , hdfcBank);

const element = mapOfBank.get("YES_33");
console.log(element);

const keysOfMap = mapOfBank.keys();
for (const key of keysOfMap) {
    const element = mapOfBank.get(key);
    console.log(key, element);
    
}



