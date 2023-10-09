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

    console.log(
      `firstNumber: ${firstNumber} | operator: ${operator} | secondNumber${secondNumber}`
    );
    if (pressed === "ac") {
      console.log("ac pressed");
      clear();
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

function clear() {
  console.log("clearing");
  firstNumber = undefined;
  operator = undefined;
  secondNumber = undefined;
  displayValue = "";
  display.textContent = "";
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
