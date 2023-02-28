function monthOfYear(monthNumber){
    switch (monthNumber){
        case 1:
            console.log(`${monthNumber} Month of the year is - January `);
        break;
        case 2:
            console.log(`${monthNumber} Month of the year is - February `);
        break;
        case 3:
            console.log(`${monthNumber} Month of the year is - March `);
        break;
        case 4:
            console.log(`${monthNumber} Month of the year is - April `);
        break;
        case 5:
            console.log(`${monthNumber} Month of the year is - May `);
        break;
        case 6:
            console.log(`${monthNumber} Month of the year is - June `);
        break;
        case 7:
            console.log(`${monthNumber} Month of the year is - July `);
        break;
        case 8:
            console.log(`${monthNumber} Month of the year is - August `);
        break;
        case 9:
            console.log(`${monthNumber} Month of the year is - September `);
        break;
        case 10:
            console.log(`${monthNumber} Month of the year is - October `);
        break;
        case 11:
            console.log(`${monthNumber} Month of the year is - November `);
        break;
        case 12:
            console.log(`${monthNumber} Month of the year is - December `);
        break;
        default:
            console.log(`Invalid month number ${monthNumber}`);      
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(-7);
monthOfYear("3");

