import http from "http";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import routes from "./server/routes";

const hostname = "127.0.0.1";
const port = 3000;
const app = express(); // setup express application
const server = http.createServer(app);

// Parse incoming requests data
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(logger("dev")); // log requests to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the ."
  })
);
