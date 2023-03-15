


n1 = 100
n2 = n1//deep clone
console.log(n2);
n1 = 200
console.log(n2);

let s1 = 'Hey JS'
let s2 = s1//deep clone
console.log(s2);

let  b1 = true
let b2 = b1 //deep clone
console.log(b2);

const person = {
    fullName : "Ms Dhoni",
    age : 38,
}

const player = person;//shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);

console.log(`deep clone using spreed operator`);
const newPlayer ={...person};//spreed operator
console.log(newPlayer);
newPlayer.age=42;
console.log(`newPlayer==> ${newPlayer.fullName} ,${newPlayer.age}`);
console.log(`person==> ${person.fullName} ,${person.age}`);

const student ={
    fullName: "Virat Kohli",
    age :33,
    address:{
        street:"As Club",
        city:"Pune",
        pin: 445206,
    }
}
const newstudent ={...student};//deep clone using spreed operator in nested object
newstudent.address.city="Mumbai";
console.log(`newStudent: ${newstudent.address.city}`);//in nested object spreed operator will faild
console.log(`student: ${student.address.city}`);

newstudent.fullName ="King Kohli";
console.log(`newStudent: ${newstudent.fullName}`);
console.log(`student: ${student.fullName}`);

console.log(`deep clone using string.json()`);
const bank={
    bankName : "SBI Bank",
    accountNo : 6754898,
    bankAddress : {
        city :"Bangleru",
        pin : 443211,
    }
}
const newBank = JSON.parse(JSON.stringify(bank));//string.json
newBank.bankAddress.pin = 999999;
console.log(`Bank: ${bank.bankAddress.pin}`);
console.log(`newBank: ${newBank.bankAddress.pin}`);








