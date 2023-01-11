const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const product = require("./routes/product");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());


app.use(express.json({ extended: false }));
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connect database successful");
});
app.use(bodyParser.json({limit:"50mb"}));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
