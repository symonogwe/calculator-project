
// Document query selectors
const display = document.getElementById("display");

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

//  variables for numbers and operator
let calcArray = [];
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


// numberBtn event listeners
let allNumberBtn = document.querySelectorAll(".digit.number");
allNumberBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        display.textContent += btn.textContent;
        if (calcArray[1] === undefined && calcArray[2] === undefined) {
            calcArray[0] = display.textContent;
            number1 = display.textContent;
        }
        if (calcArray[0] !== undefined && calcArray[1] !== undefined) {
            calcArray[2] = display.textContent;
            number2 = display.textContent;
        }
        checkValue();
    });
});



// function to check value after click event
function  checkValue() {
    console.log(display.textContent);
    console.log(calcArray);
    console.log(number1);
    // console.log(number2);
}








