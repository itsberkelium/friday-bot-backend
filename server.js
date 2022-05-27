const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const jsonParse = bodyParser.json();
const urlencodedParse = bodyParser.urlencoded({ extended: true });

app.use(cors());

app.options("*", cors());

app.get("/", (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
