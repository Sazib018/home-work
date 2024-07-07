// leap year

function leapYear(year) {
    return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
}

function cheakLeapYears(yearsArray) {
    const leapYears = [];
    for (const year of yearsArray) {
        if (leapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

const inputYears = [2023, 2024, 2025, 2028, 2030];
const leapYearsArray = cheakLeapYears(inputYears);

console.log("leap years:", leapYearsArray);
