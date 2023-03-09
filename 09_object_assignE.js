const sbiBank={
    bankName: "SBI Bank" ,
    location: "Amarvati",
    accountNo: 13456789,
    Ifsc: "SBI445566",
    interestRate: 7,
    showDetails : function()
    {
      console.log(`---------- SBI Bank DEtails ----------`);
      console.log(`Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`);
    }
};
sbiBank.showDetails();

axisBank={
    bankName: "Axis Bank" ,
    location: "New Delhi",
    accountNo: 98765431,
    Ifsc: "AXIS88776ku",
    interestRate: 8,
    showDetails : function()
    {
      console.log(`---------- Axis Bank DEtails ----------`);
      console.log(`Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`);
    }
};
axisBank.showDetails();

hdfcBank={
    bankName: "HDFC Bank",
    location: "Nagpur",
    accountNo: 4567893,
    Ifsc: "HDFC556677",
    interestRate: 7.5,
    showDetails : function()
    {
      console.log(`---------- HDFC Bank DEtails ----------`);
      console.log(`Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`);
    }
};
hdfcBank.showDetails();

yesBank={
    bankName: "Yes Bank",
    location: "Pune",
    accountNo: 77896541,
    Ifsc: "YES663388",
    interestRate: 9,
    showDetails : function()
    {
      console.log(`---------- YES Bank DEtails ----------`);
      console.log(`Bank Name:${this.bankName}, Location : ${this.location}, Account No : ${this.accountNo}, IFSC coad: ${this.Ifsc}, Interest rate: ${this.interestRate}`);
    }
};
yesBank.showDetails();