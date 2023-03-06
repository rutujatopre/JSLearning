function weekday (day){
switch (day){
    case 1://(if day==1)
        console.log(`Day of the week is ${day} : Monday`);
    break;
    case 2://(if day==2)
        console.log(`Day of the week is ${day} : Tuesday`);
    break;
    case 3://(if day==3)
        console.log(`Day of the week is ${day} : Wednesday`);
    break;
    case 4://(if day==4)
        console.log(`Day of the week is ${day} : Thursday`);
    break;
    case 5://(if day==5)
        console.log(`Day of the week is ${day} : Friday`);
    break;
    case 6://(if day==6)
        console.log(`Day of the week is ${day} : Saturday`);
    break;
    case 7://(if day==7)
        console.log(`Day of the week is ${day} : Sunday`);
    break;
    default:
        console.log(`Invalid day: ${day}`);
    break;
}
console.log(`End of switch case for ${day}`);
}
weekday(2);
weekday(5);
weekday(-2);
weekday("6");