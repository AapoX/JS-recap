function convertTemp() {
  const celcius = document.getElementById('celcius');
  const fahrenheit = (celcius.value * 9) / 5 + 32;
  const kelvin = parseFloat(celcius.value) + 273.15;

  document.getElementById('result').textContent =
    `Lämpötila Fahrenheit: ${fahrenheit}°F, Kelvin: ${kelvin}K`;
}

function twoDplane() {
  // Get coordinates from input field
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

document.addEventListener('DOMContentLoaded', function () {
  const convert = document.getElementById('convert');
  convert.addEventListener('click', convertTemp);

  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', twoDplane);
});
