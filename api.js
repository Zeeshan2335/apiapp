const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const mongoose = require("mongoose");
const studentModel = require("./Models/studentModel");

const db = "mongodb://127.0.0.1:27017/empdb";
mongoose
  .connect(db)
  .then(() => console.log("DB Connected..."))
  .catch((er) => console.log(er));

const api = express();
api.use(cors());
api.use(json());

api.get("/students", async (req, res) => {
  const result = await studentModel.find({});
  const newformate = result.map((item) => ({
    lable: item.name,
    val: item.age,
    userCity: item.city,
  }));
  res.json(newformate);
});
api.post("/students", async (req, res) => {
  const result = await studentModel.find(req.body);
  const newformate = result.map((item) => ({
    lable: item.name,
    val: item.age,
    userCity: item.city,
  }));
  res.json(newformate);
});

api
  .get("/", (res, req) => {
    req.send("welcome to my page...");
  })
  .listen(3030, () => console.log("server is up..."));
