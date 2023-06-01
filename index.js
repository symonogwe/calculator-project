
// Document query selectors
const display = document.getElementById("display");
let displayParagraph = document.createElement("p");

// Global result variable
let result = null;

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

// Array stores number1, operator and number2 after button clicks
let calcArray = [];

// Final operate function
function operate(number1, operator, number2) {
    number1 = calcArray[0];
    operator = calcArray[1];
    number2 = calcArray[2];
    console.log(calcArray);

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
        if (number2 === 0) {
            return display.textContent = "Error";
        }else {
            return division(number1, number2);
        }
    }
}

// Number buttons event listeners
let allNumberBtn = document.querySelectorAll(".digit.number");
allNumberBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        if (calcArray[0] === result && calcArray.length === 1) {
            calcArray.length = 0;
            display.textContent = "";
            console.log(btn.textContent);
            console.log(calcArray);
        }
        if (calcArray[1] === undefined && calcArray[2] === undefined) {
            display.textContent += btn.textContent;
            calcArray[0] = Number(display.textContent);
        }
        if (calcArray[0] !== undefined && calcArray[1] !== undefined) {
            displayParagraph.textContent = "";
            display.textContent += btn.textContent;
            calcArray[2] = Number(display.textContent);
        }
        operate();
    });
});

// operator click events(+, -, /, *)
let allOperatorBtn  = document.querySelectorAll(".digit.operator");
allOperatorBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        if (calcArray.length === 3) {
            result = operate();
            display.textContent = "";
            displayParagraph.textContent = result;
            display.appendChild(displayParagraph);
            calcArray.length = 0;
            console.log(calcArray);
            calcArray[0] = result;
            calcArray[1] = btn.textContent;
            console.log(calcArray);
        }else {
            display.textContent = "";
            displayParagraph.textContent = btn.textContent
            display.appendChild(displayParagraph);
            calcArray[1] = btn.textContent;
        }
        operate();
    });
});

//Operate(=) function
const operateSign = document.querySelector(".digit.operate");
operateSign.addEventListener("click", function() {
    if (calcArray.length === 3) {
        result = operate();
        display.textContent = result;
        calcArray.length = 0;
        calcArray[0] = result;
        console.log(result);
        console.log(calcArray);
    }
});

