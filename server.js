require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

// connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.w37hzhh.mongodb.net/${process.env.MONGODB_COLLECTION_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware

// enable CORS

app.use(cors());

// serve static files

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set EJS as templating engine

app.set("view engine", "ejs");

// LOGIC Here

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.ejs");
  console.log(__dirname);
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
