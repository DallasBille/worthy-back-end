// start calculation with clarity first, we must use the returned value from our to calculate the value with color factors.

const color = ["Fancy", "M-Z", "L", "K", "J", "I", "H", "G", "F", "E", "D"];

const colorPercentIncrease = [
  1.12,
  1.11,
  1.22,
  1.22,
  1.17,
  1.24,
  1.21,
  1.18,
  1.18,
  1.25
];

//   Our value with accumulate based on the value of the clarityCalculation Function

function colorCalculation() {
  let value = 1100; // Here we assume 1100 is the return of clarity calculation.
  if (color[0] === fakePostRequest.color) {
    return value;
  }
  for (let i = 0; i < color.length; i++) {
    if (color[i] === fakePostRequest.color) {
      return Math.round(value);
    } else {
      value = value * colorPercentIncrease[i];
    }
  }
  return Math.round(value);
}

console.log(colorCalculation());
