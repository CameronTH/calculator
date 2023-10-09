const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let firstNumber = undefined;
let operator = undefined;
let secondNumber = undefined;
let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let pressed = event.target.id;
    console.log("pressed button: " + pressed);

    if (firstNumber === undefined) {
      console.log("first digit");
      firstNumber = pressed;
      updateDisplay(pressed);
    } else if (operator === undefined && !isNaN(pressed)) {
      console.log("next digit for first");
      firstNumber += pressed;
      updateDisplay(pressed);
    }
    if (
      (pressed === "add" ||
        pressed === "subtract" ||
        pressed === "multiply" ||
        pressed === "divide") &&
      operator === undefined
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

    console.log(
      `firstNumber: ${firstNumber} | operator: ${operator} | secondNumber: ${secondNumber}`
    );
    if (pressed === "ac") {
      console.log("ac pressed");
      clear();
    }
    if (pressed === "equals") {
      console.log("equals pressed");
      decideOperation();
    }
  });
});

function updateDisplay(pressed) {
  if (pressed === "multiply") {
    pressed = "x";
  } else if (pressed === "divide") {
    pressed = "÷";
  } else if (pressed === "add") {
    pressed = "+";
  } else if (pressed === "subtract") {
    pressed = "-";
  }
  display.textContent = displayValue += pressed;
}

function decideOperation() {
  display.textContent = "";
  if (operator === "add") {
    add(firstNumber, secondNumber);
  } else if (operator === "subtract") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "multiply") {
    multiply(firstNumber, secondNumber);
  } else if (operator === "divide") {
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
  displayValue = firstNumber;
  operator = undefined;
  secondNumber = undefined;
}

const add = (a, b) => {
  let add = +a + +b;
  display.textContent = add;
  continueSum(add);
};
const subtract = (a, b) => {
  let subtract = +a - +b;
  display.textContent = subtract;
  continueSum(subtract);
};
const multiply = (a, b) => {
  let multiply = +a * +b;
  display.textContent = multiply;
  continueSum(multiply);
};
const divide = (a, b) => {
  let divide = +a / +b;
  display.textContent = divide;
  continueSum(display);
};
