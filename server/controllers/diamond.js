import model from "../models";
import calculatorsAdapter from "../adapters/calculatorsAdapter";
const {
  clarityCalculation,
  colorCalculation,
  cutCalculation,
  caratCalculation
} = calculatorsAdapter;
const { Diamond } = model;
class Diamonds {
  static create(req, res) {
    // Here we are sending each value calculation to the next function.
    const clarityValue = clarityCalculation(req.body);
    const colorValue = colorCalculation(clarityValue, req.body);
    const cutValue = cutCalculation(colorValue, req.body);
    const finalValue = caratCalculation(cutValue, req.body);

    var diamond = new Diamond(req.body);
    diamond["sold"] = finalValue; // create a sold field set the value to the final calculation, then save it to our DB.
    diamond.save().then(diamondData =>
      res.status(201).send({
        message: `Your diamond is worth $${diamondData.sold}`,
        diamondData
      })
    );
  }
  static list(req, res) {
    return Diamond.findAll().then(diamonds => res.status(200).send(diamonds));
  }
}
export default Diamonds;
