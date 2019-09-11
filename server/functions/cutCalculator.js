const cut = ["Emerald", "Marquise", "Cushion", "Princess", "Round"];

const cutPercentIncrease = [1.06, 1.07, 1.16, 1.3];

//   Our value with accumulate based on the value of the clarityCalculation Function

function cutCalculation() {
  let value = 1100; // Here we assume 1100 is the return of clarity calculation.
  if (cut[0] === fakePostRequest.cut) {
    return value;
  }
  for (let i = 0; i < cut.length; i++) {
    if (cut[i] === fakePostRequest.cut) {
      return Math.round(value);
    } else {
      value = value * cutPercentIncrease[i];
    }
  }
  return Math.round(value);
}
