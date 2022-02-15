/*
#################################
# Project name: Simple Calculator
# Description: From this calculator app you can easily four fundamental mathematical  operation like addition, subtraction, product and division of two numbers.
# Date: 15/02/22
# Author: Khaled Md. Saifullah
##################################
*/

// Take Input from the User
const takeInput = () => {
  const num1 = parseInt(document.getElementById("number1").value);
  const num2 = parseInt(document.getElementById("number2").value);
  return [num1, num2];
};

// Mathematical Operation(Addition,Subtraction,Product,Division)
const mainCalculation = () => {
  const inputValue = takeInput();
  const [num1, num2] = inputValue;
  const sum = num1 + num2;
  const sub = num1 - num2;
  const prod = num1 * num2;
  const div = Number((num1 / num2).toFixed(2));
  const result = [sum, sub, prod, div];
  return result;
};

// Show Result
const showResult = (operationName, rst) => {
  document.getElementById("show-result").style.display = "block";
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `The ${operationName} is: ${rst}`;
  paragraph.classList.add("right");
  document.getElementById("show-result").appendChild(paragraph);
};

// Add two numbers
const add = document.getElementById("add");
add.addEventListener("click", () => {
  const result = mainCalculation();
  const operationName = "Addition";
  clearInputField();
  showResult(operationName, result[0]);
});

// Subtract two numbers
const sub = document.getElementById("sub");
sub.addEventListener("click", () => {
  const result = mainCalculation();
  const operationName = "Subtraction";
  clearInputField();
  showResult(operationName, result[1]);
});

// Product of two numbers
const prod = document.getElementById("prod");
prod.addEventListener("click", () => {
  const result = mainCalculation();
  const operationName = "Product";
  clearInputField();
  showResult(operationName, result[2]);
});

// Division of two numbers
const div = document.getElementById("div");
div.addEventListener("click", () => {
  const result = mainCalculation();
  const operationName = "Division";
  clearInputField();
  showResult(operationName, result[3]);
});

// Clear Input Field Values
const clearInputField = () => {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
};
