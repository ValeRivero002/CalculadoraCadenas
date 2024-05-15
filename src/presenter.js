import add from "./calculadora.js";


// Function to handle the calculation when the button is clicked
function calculate() {
  const input = document.getElementById('numberInput').value;
  const result = add(input);
  displayResult(result);
}

// Function to display the result on the page
function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Result: ${result}`;
}

// Add event listener to the calculate button
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculate);
