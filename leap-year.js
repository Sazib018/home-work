// leap year

function leapYears(year) {
    let leapYear =[];

for (let i = 0; i < year.length; i++) {
    const element = year[i];
    if (element % 4 ==0) {
       leapYear.push (element); 
    }
    
}
return leapYear;
}

const year =[2020, 2022, 2024, 2026, 2028, 2030];
console.log(leapYears(year));
