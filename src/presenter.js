import addChains from "./calculadora.js";


// Function to handle the calculation when the button is clicked
function calculate() {
  const input = document.getElementById('numberInput').value;
  const result = addChains(input);
  displayResult(result);
}

// Function to display the result on the page
function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Result: ${result}`;
}

// addChains event listener to the calculate button
const calculateButton = document.getElementById('calculateButton');
calculateButton.addChainsEventListener('click', calculate);
