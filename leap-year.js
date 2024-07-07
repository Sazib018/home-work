// leap year

function leapYear(years) {

    return (years % 4 === 0 && years % 100 !== 0 && years % 400 === 0);
}

function array(yearsArray) {
    const arrayAdd = [];
    for ( const years of yearsArray) {
        if (leapYear(years)) {
            arrayAdd.push(years);
        }
    }
    return arrayAdd;
}

const Years = [2023, 2024, 2025, 2028, 2030];
const leapYearsArray = array(Years);

console.log("Leap years:", leapYearsArray);
