const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
var bodyParser = require("body-parser");
const authorRoute = require("./src/routes/author");
const articleRoute = require("./src/routes/article");
const product = require("./src/routes/product");
const upload = require("./src/routes/upload");
const userRoute = require("./src/routes/user");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());

app.use(express.json({ extended: false }));
mongoose.connect('mongodb+srv://PhuHuy_Articles:Huy=111111@cluster0.dsi0e08.mongodb.net/?retryWrites=true&w=majority', () => {
  console.log("Connect database successful");
});
app.use(bodyParser.json({limit:"50mb"}));
app.get("/", (req, res) => {
  res.send(`${process.env.MONGODB_URL}`);
});
app.use("/api/user", userRoute);
app.use("/api/author", authorRoute);
app.use("/api/article", articleRoute);
app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
