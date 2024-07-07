// leap year

function leapYear(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function array(yearsArray) {
    const arrayAdd = [];
    for ( const year of yearsArray) {
        if (leapYear(year)) {
            arrayAdd.push(year);
        }
    }
    return arrayAdd;
}

const Years = [2023, 2024, 2025, 2028, 2030];
const leapYearsArray = array(Years);

console.log("Leap years:", leapYearsArray);
