let memory = [];

function sumBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  const result = Number(num1) + Number(num2) + Number(num3);
  document.getElementById("result").innerHTML = result;
  memory.push(result);
  updateMemoryDisplay();
}

function subtractBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  const result = num1 - num2 - num3;
  document.getElementById("result").innerHTML = result;
  memory.push(result);
  updateMemoryDisplay();
}

function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  const result = num1 * num2 * num3;
  document.getElementById("result").innerHTML = result;
  memory.push(result);
  updateMemoryDisplay();
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  const result = num1 / num2 / num3;
  document.getElementById("result").innerHTML = result;
  memory.push(result);
  updateMemoryDisplay();
}

function updateMemoryDisplay() {
  const resultCount = document.getElementById("resultCount");
  const memoryArray = document.getElementById("memoryArray");
  resultCount.textContent = memory.length;
  memoryArray.textContent = JSON.stringify(memory);
}