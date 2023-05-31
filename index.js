
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

// //  variables for numbers and operator
let calcArray = [];

// operate function
function operate(number1, operator, number2) {
    number1 = calcArray[0];
    operator = calcArray[1];
    number2 = calcArray[2];
    console.log(calcArray);
    console.log(number2);

    if (operator === "+") {
        return addition(number1, number2);
    }
    if (operator === "-") {
        return subtraction(number1, number2);
    }
    if (operator === "x") {
        return multiplication(number1, number2);
    }
    if (operator === "÷") {
        return division(number1, number2);
    }
}

// numberBtn event listeners
let allNumberBtn = document.querySelectorAll(".digit.number");
allNumberBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        if (calcArray[1] === undefined && calcArray[2] === undefined) {
            display.textContent += btn.textContent;
            calcArray[0] = Number(display.textContent);
            // number1 = Number(display.textContent);
        }
        if (calcArray[0] !== undefined && calcArray[1] !== undefined) {
            display.textContent += btn.textContent;
            calcArray[2] = Number(display.textContent);
            // number2 = Number(display.textContent);
        }
        operate();
    });
});

// operator click events
let allOperatorBtn  = document.querySelectorAll(".digit.operator");
allOperatorBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        display.textContent = "";
        calcArray[1] = btn.textContent;
        operator = btn.textContent;
        operate();
    });
});

//Operate function
const operateSign = document.querySelector(".digit.operate");
operateSign.addEventListener("click", function() {
    if (calcArray.length === 3) {
        let result = operate();
        display.textContent = result;
    }
});

