let currentInput = '';
let currentOperation = '';
let resultScreen = document.getElementById('resultScreen');

function clearScreen() {
  currentInput = '';
  currentOperation = '';
  updateScreen();
}

function appendCharacter(character) {
  if (currentInput === '' && isOperation(character)) {
    return; // Prevent operation at the beginning
  }

  currentInput += character;
  updateScreen();
}

function calculateResult() {
  if (currentInput === '' || isOperation(currentInput.charAt(currentInput.length - 1))) {
    return; // Prevent operation at the end
  }

  try {
    const result = eval(currentInput);
    currentInput = String(result);
    currentOperation = '';
    updateScreen();
  } catch (error) {
    currentInput = 'Error';
    currentOperation = '';
    updateScreen();
  }
}

function isOperation(character) {
  return ['+', '-', '*', '/'].includes(character);
}

function updateScreen() {
  resultScreen.innerText = currentInput;
}
