// Tehtävä 1

function convertTemp() {
  const celcius = document.getElementById('celcius');
  const fahrenheit = (celcius.value * 9) / 5 + 32;
  const kelvin = parseFloat(celcius.value) + 273.15;

  document.getElementById('result').textContent =
    `Lämpötila Fahrenheit: ${fahrenheit}°F, Kelvin: ${kelvin}K`;
}

// Tehtävä 2

function twoDplane() {
  const coordsInput = document.getElementById('coords').value;

  const points = coordsInput.split(' ');
  const point1 = points[0].split(',');
  const x1 = parseFloat(point1[0]);
  const y1 = parseFloat(point1[1]);

  const point2 = points[1].split(',');
  const x2 = parseFloat(point2[0]);
  const y2 = parseFloat(point2[1]);

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById('distanceResult').textContent =
    `Etäisyys pisteiden (${x1},${y1}) ja (${x2},${y2}) välillä: ${distance.toFixed(2)}`;
}

// Tehtävä 3

function calcTriangle() {
  const sides = document.getElementById('triangle').value;
  const points = sides.split(',');
  const a = parseFloat(points[0]);
  const b = parseFloat(points[1]);
  const c = parseFloat(points[2]);
  let status = '';

  if (a === b && b === c) {
    status = 'Equilateral triangle';
  } else if (a === b || b === c || a === c) {
    status = 'Isosceles triangle';
  } else if (a !== b && b !== c && a !== c) {
    status = 'Scalene triangle';
  }

  document.getElementById('triangleResult').textContent = status;
}

//Tehtävä 4

function calculateGrade() {
  const num = parseFloat(document.getElementById('score').value);
  let grade;

  switch (true) {
    case num >= 0 && num <= 39:
      grade = 0;
      break;
    case num >= 40 && num <= 51:
      grade = 1;
      break;
    case num >= 52 && num <= 63:
      grade = 2;
      break;
    case num >= 64 && num <= 75:
      grade = 3;
      break;
    case num >= 76 && num <= 87:
      grade = 4;
      break;
    case num >= 88 && num <= 100:
      grade = 5;
      break;
    default:
      grade = 'Invalid score';
  }
  document.getElementById('graderesult').textContent = `Arvosanasi on ${grade}`;
}

// Tehtävä 5

function sumNaturalNumbers() {
  const num = parseInt(document.getElementById('naturalNum').value);
  let sum = 0;

  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    document.getElementById('sumResult').textContent =
      `Sum of natural numbers up to ${num} is ${sum}`;
  } else {
    document.getElementById('sumResult').textContent =
      'Please enter a positive integer.';
  }
}

// Tehtävä 6
function generateMultiplicationTable() {
  const input = document.getElementById('multiplicationInput').value;
  const num = parseInt(input);

  if (num <= 0) {
    document.getElementById('multiplicationTable').innerHTML =
      'Anna positiivinen numero';
    return;
  }

  let tableHTML = "<table border='1'";
  for (let i = 1; i <= num; i++) {
    tableHTML += '<tr>';
    for (let j = 1; j <= num; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += '</tr>';
  }
  tableHTML += '</table>';

  document.getElementById('multiplicationTable').innerHTML = tableHTML;
}

// EL for all tasks I hate doing .onclick in HTML
document.addEventListener('DOMContentLoaded', function () {
  const convert = document.getElementById('convertTemp');
  convert.addEventListener('click', convertTemp);

  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', twoDplane);

  const grade = document.getElementById('calculateGrade');
  grade.addEventListener('click', calculateGrade);

  const triangle = document.getElementById('triangleType');
  triangle.addEventListener('click', calcTriangle);

  const sumBtn = document.getElementById('calculateSum');
  sumBtn.addEventListener('click', sumNaturalNumbers);

  const generateTableBtn = document.getElementById('generateTable');
  generateTableBtn.addEventListener('click', generateMultiplicationTable);
});
