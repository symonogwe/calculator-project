
// Document query selectors
// Display selectors
const display = document.getElementById("display");
let displayParagraph = document.createElement("p");

// AC button selector
const clearBtn = document.querySelector(".digit.clear");
clearBtn.addEventListener("click", function() {
    calcArray.length = 0;
    display.textContent = "";
    displayParagraph.textContent = "";
    decimalBtn.textContent = "."
});

// C (delete) button selector
const deleteBtn = document.querySelector(".digit.delete");
deleteBtn.addEventListener("click", function() {
    if (calcArray.length === 1) {
        let newArr = calcArray.join("");
        let splitArr = newArr.split("");
        splitArr.pop();
        let finalStr = +(splitArr.join(""));
        display.textContent = finalStr;
        calcArray.pop();
        calcArray.push(finalStr);
    }
    if (calcArray.length === 2) {
        calcArray.pop();
        display.textContent = calcArray
    }
    if (calcArray.length === 3) {
        let popped = calcArray.pop();
        let newStr = popped.toString();
        let newArr = newStr.split("");
        newArr.pop();
        let newNumber = newArr.join("");
        display.textContent = newNumber;
        calcArray.push(newNumber);
    }
});

// Decimal button selector
const decimalBtn = document.querySelector(".digit.decimal");
decimalBtn.addEventListener("click", function () {
    if (calcArray[1] === undefined && calcArray[2] === undefined) {
        display.textContent += decimalBtn.textContent;
        disableDecimal();
    }
    if (calcArray[0] !== undefined && calcArray[1] !== undefined) {
        display.textContent += decimalBtn.textContent;
        disableDecimal();
    }
});

// disableDecimal function
function disableDecimal() {
    decimalBtn.textContent = "";
}

// Global result variable
let result = null;

// simple operator functions
function addition(...input) {
  const sum = input.reduce((accumulator, currentValue) => {
    return (accumulator * 10) + (currentValue * 10);
  });
  return sum/10;
}

function subtraction(...input) {
    const subtract = input.reduce((accumulator, currentValue) => {
        return (accumulator * 10) - (currentValue * 10);
    });
    return subtract/10;
}

function multiplication(...input) {
    const multiply = input.reduce((accumulator, currentValue) => {
        return (accumulator * 10) * (currentValue * 10);
    });
    return multiply/100;
}

function division(...input) {
    const divide = input.reduce((accumulator, currentValue) => {
        return (accumulator * 10) / (currentValue * 10);
    });
    return divide ;
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
            console.log(typeof calcArray[0]);
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
            displayParagraph.textContent = btn.textContent;
            display.appendChild(displayParagraph);
            decimalBtn.textContent = ".";
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
        decimalBtn.textContent = "."
        console.log(result);
        console.log(calcArray);
    }
});