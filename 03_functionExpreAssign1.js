var Check_leap_year = function (leap_year)
{
    if(leap_year == undefined || leap_year == null ||(typeof leap_year != "number"))
    {
       console.log(`Invalid year ${leap_year}`);
       return;
    }
    
    if(leap_year % 4 == 0) 
    {
       console.log(`Given year ${leap_year} is leap year`);
    }
    else
    {
        console.log(`Given year ${leap_year} is not leap year`); 
    }
}
Check_leap_year(2020);
Check_leap_year(1999);
Check_leap_year(1600);
Check_leap_year(2022);
Check_leap_year(1945);
Check_leap_year(null);
Check_leap_year("Twenty Twenty");
Check_leap_year(undefined);
Check_leap_year(1750);



