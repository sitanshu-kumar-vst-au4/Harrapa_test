var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
var cors = require("cors");
const dotenv = require('dotenv');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
dotenv.config();
 
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://eagle-ecommerce-app:eagle-ecommerce-app@ecommerce-app-ll9yl.mongodb.net/ecommerce-app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const FarmerController = require("./Controller/Farmer");
const TransactionController = require("./Controller/Transaction");
const TransporationController = require("./Controller/Transporation")

app.use("/farmer_create", FarmerController.create);
app.use("/transaction_create", TransactionController.create);
app.use("/transporation_create", TransporationController.create);

let db = mongoose.connection;
db.once("open", function () {
  console.log("connected to mongodb");
});

//check for DB errors
db.on("error", function (err) {
  console.log(err);
});
 
//Heroku Config
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

module.exports = app;
