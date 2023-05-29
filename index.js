
// simple operator functions
function addition(...input) {
  const sum = input.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum;
}

function subtraction(...input) {
    const subtract = input.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;
    });
    return subtract;
}

function multiplication(...input) {
    const multiply = input.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    });
    return multiply;
}

function division(...input) {
    const divide = input.reduce((accumulator, currentValue) => {
        return accumulator / currentValue;
    });
    return divide;
}

// 3 variables for numbers and operator
let number1 = null;
let number2 = null;
let operator = null;

// operate function
function operate(number1, number2, operator) {
    if (operator === "+") {
        return addition(number1, number2);
    }
    if (operator === "-") {
        return subtraction(number1, number2);
    }
    if (operator === "*") {
        return multiplication(number1, number2);
    }
    if (operator === "/") {
        return division(number1, number2);
    }
}

console.log(operate(900, 10, "-"));