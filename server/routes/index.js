import Diamonds from "../controllers/diamond";

export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Diamonds API!"
    })
  );
  //   creates a new diamond
  app.post("/api/diamonds", Diamonds.create);
  // get all diamonds from database
  app.get("/api/diamonds", Diamonds.list);
};
