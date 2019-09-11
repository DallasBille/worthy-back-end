// The information flows from top to bottom. Each functions return value is the value the next function calculates from.
// Starting with clarity, then color, then cut, then carat.
// All functions but carat are compounding with each iteration in percentIncrease array.
//
class calculatorsAdapter {
  static clarityCalculation(newDiamondEntry) {
    // This is the average clarity value percent increase calculated from the Rapaport scale
    const clarityPercentIncrease = [
      1.69,
      1.64,
      1.28,
      1.13,
      1.15,
      1.07,
      1.05,
      1.03,
      1.07,
      1.03,
      1.04
    ];
    const clarity = [
      "I3",
      "I2",
      "I1",
      "SI3",
      "SI2",
      "SI1",
      "VS2",
      "VS1",
      "VVS2",
      "VVS1",
      "IF",
      "FL"
    ];

    let baseCaseValue = 275;
    for (let i = 0; i < clarity.length; i++) {
      if (clarity[i] === newDiamondEntry.clarity) {
        return Math.round(baseCaseValue);
      } else {
        baseCaseValue = baseCaseValue * clarityPercentIncrease[i];
      }
    }
  }

  static colorCalculation(clarityValue, newDiamondEntry) {
    // This is the average color percent increase calculated from Rapaport scale
    const colorPercentIncrease = [
      1.05,
      1.15,
      1.1,
      1.28,
      1.16,
      1.13,
      1.1,
      1.09,
      1.1,
      1.13
    ];
    const color = ["Fancy", "M-Z", "L", "K", "J", "I", "H", "G", "F", "E", "D"];
    let value = clarityValue;
    for (let i = 0; i < color.length; i++) {
      if (color[i] === newDiamondEntry.color) {
        return Math.round(value);
      } else {
        value = value * colorPercentIncrease[i];
      }
    }
  }

  static cutCalculation(colorValue, newDiamondEntry) {
    const cut = ["Emerald", "Marquise", "Cushion", "Princess", "Round"];
    const cutPercentIncrease = [1.06, 1.07, 1.16, 1.3];
    let value = colorValue;
    for (let i = 0; i < cut.length; i++) {
      if (cut[i] === newDiamondEntry.cut) {
        return Math.round(value);
      } else {
        value = value * cutPercentIncrease[i];
      }
    }
  }
  static caratCalculation(cutValue, newDiamondEntry) {
    let value = cutValue;
    let firstIncrease = value * newDiamondEntry.carat;
    let finalSoldForPrice = firstIncrease * newDiamondEntry.carat;
    return Math.round(finalSoldForPrice);
  }
}

export default calculatorsAdapter;
