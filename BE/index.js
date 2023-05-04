const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/router");
const app = express();
const port = 5000;

dotenv.config();

app.use("/api",router);

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
