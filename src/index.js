require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT);
