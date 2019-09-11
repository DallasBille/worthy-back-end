import model from "../models";

const { Diamond } = model;
class Diamonds {
  static create(req, res) {
    var diamond = new Diamond(req.body); // the sequelize create method didnt work for this.
    diamond.save().then(diamondData =>
      res.status(201).send({
        message: "Diamond successfully created",
        diamondData
      })
    );
  }
  static list(req, res) {
    return Diamond.findAll().then(diamonds => res.status(200).send(diamonds));
  }
}
export default Diamonds;
