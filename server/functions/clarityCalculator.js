class clarityCalculator {
  clarityPercentIncrease = [
    1.45,
    1.56,
    1.08,
    1.07,
    1.1,
    1.06,
    1.03,
    1.05,
    1.05
  ];
  clarity = [
    "I3",
    "I2",
    "I1",
    "SI2",
    "SI1",
    "VS2",
    "VS1",
    "VVS2",
    "VVS1",
    "IF",
    "FL"
  ];

  clarityCalculation() {
    let value = 275;
    if (clarity[0] === fakePostRequest.clarity) {
      return value;
    }
    for (let i = 0; i < clarity.length; i++) {
      if (clarity[i] === fakePostRequest.clarity) {
        return Math.round(value);
      } else {
        value = value * clarityPercentIncrease[i];
      }
    }
    return Math.round(value);
  }
}
export default clarityCalculator;
