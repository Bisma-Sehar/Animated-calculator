const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const clickSound = document.getElementById('clickSound');
let current = '';

function press(val) {
  playClick();
  current += val;
  display.textContent = current;
}

function calculate() {
  playClick();
  try {
    current = eval(current).toString();
    display.textContent = current;
  } catch {
    display.textContent = 'Error';
    current = '';
  }
}

function clearDisplay() {
  playClick();
  current = '';
  display.textContent = '0';
}

function toggleTheme() {
  calculator.classList.toggle('dark');
  calculator.classList.toggle('light');
}

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}