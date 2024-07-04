// cm to km

function cmToKm(km) {
    const cm = km* 0.00001;
    return cm;
}
const me = cmToKm(50);
console.log(me);

// factorial


function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

const Number = 6;
const Result = factorial(Number);
console.log(`Factorial of ${Number} is ${Result}`);


