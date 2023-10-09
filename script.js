const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
let displayValue = "";
let stringMode = false;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let pressed = event.target.id;
    console.log("pressed button: " + pressed);

    if (firstNumber === undefined && !isNaN(pressed)) {
      console.log("first digit");
      firstNumber = pressed;
      updateDisplay(pressed);
    } else if (operator === undefined && !isNaN(pressed)) {
      console.log(!isNaN(pressed));
      console.log("next digit for first");
      firstNumber += pressed;
      updateDisplay(pressed);
    }
    if (
      (pressed === "+" ||
        pressed === "-" ||
        pressed === "x" ||
        pressed === "÷") &&
      operator === undefined &&
      firstNumber !== undefined
    ) {
      console.log("operator undefined");
      operator = pressed;
      updateDisplay(pressed);
    }
    if (
      operator !== undefined &&
      !isNaN(pressed) &&
      secondNumber === undefined
    ) {
      console.log("second number");
      secondNumber = pressed;
      updateDisplay(pressed);
    } else if (secondNumber !== undefined && !isNaN(pressed)) {
      console.log("next digit for second");
      secondNumber += pressed;
      updateDisplay(pressed);
    }
    if (
      (pressed === "+" ||
        pressed === "-" ||
        pressed === "x" ||
        pressed === "÷") &&
      secondNumber !== undefined
    ) {
      console.log("string together mode");
      stringMode = true;
      decideOperation();
    }

    console.log(
      `firstNumber: ${firstNumber} | operator: ${operator} | secondNumber: ${secondNumber}`
    );
    if (pressed === "ac") {
      clear();
    }
    if (pressed === "equals") {
      if (operator !== undefined) {
        console.log("equals pressed");
        decideOperation();
      }
    }
  });
});

function updateDisplay(pressed) {
  display.textContent = displayValue += pressed;
}

function decideOperation() {
  display.textContent = "";
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "÷") {
    divide(firstNumber, secondNumber);
  }
}

function clear() {
  console.log("clearing");
  firstNumber = undefined;
  operator = undefined;
  secondNumber = undefined;
  displayValue = "";
  display.textContent = "";
}

function continueSum(newfirst) {
  firstNumber = newfirst;
  secondNumber = undefined;
  if (stringMode === false) {
    operator = undefined;
    displayValue = firstNumber;
    display.textContent = displayValue;
  } else {
    stringMode = false;
    displayValue = firstNumber + operator;
    display.textContent = displayValue;
  }
}

const add = (a, b) => {
  return continueSum(+a + +b);
};
const subtract = (a, b) => {
  return continueSum(+a - +b);
};
const multiply = (a, b) => {
  continueSum(+a * +b);
};
const divide = (a, b) => {
  let divide;
  if (b > 0) {
    divide = +a / +b;
  } else {
    divide = "Cannot divide by 0";
  }

  continueSum(divide);
};
