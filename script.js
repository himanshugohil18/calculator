let display = document.getElementById('display');
let memory = 0;
let answer = 0;

function appendValue(val) {
  if (display.innerText === '0') {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  let text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
}

function calculate() {
  try {
    answer = eval(display.innerText.replace('%', '/100'));
    display.innerText = answer;
  } catch {
    display.innerText = 'Error';
  }
}

function useAnswer() {
  appendValue(answer);
}

function memoryAdd() {
  memory += eval(display.innerText);
}

function memorySubtract() {
  memory -= eval(display.innerText);
}

function memoryRecall() {
  display.innerText = memory;
}

function memoryClear() {
  memory = 0;
}
