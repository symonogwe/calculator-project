
// simple operator functions
function addition(...input) {
  const sum = input.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
}

console.log(addition(1, 2, 40, 63));

function subtraction(...input) {
    const subtract = input.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
    });
    return subtract;
}

console.log(subtraction(190, 34, 2, 16));

function multiplication(...input) {
    const multiply = input.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    });
    return multiply;
}

console.log(multiplication(23, 10, 5));

function division(...input) {
    const divide = input.reduce((accumulator, currentValue) => {
        return accumulator / currentValue;
    });
    return divide;
}

console.log(division(300, 2, 10));