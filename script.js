let calculation = '';

function buttonPressed(value) {
  calculation += value;
  document.getElementById('result').value = calculation;
}

function clearResult() {
  calculation = '';
  document.getElementById('result').value = '';
}

function calculate() {
  let result = eval(calculation);
  document.getElementById('result').value = result;
  calculation = '';
}
