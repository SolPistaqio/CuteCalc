function sumBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  document.getElementById("result").innerHTML = Number(num1) + Number(num2) + Number(num3);
}

function subtractBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  document.getElementById("result").innerHTML = num1 - num2 - num3;
}

function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  document.getElementById("result").innerHTML = num1 * num2 * num3;
}

function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  num3 = document.getElementById("thirdNumber").value;
  document.getElementById("result").innerHTML = num1 / num2 / num3;
}

// Make a memory array with results, display result count and array at the bottom
// Add third number to calculator