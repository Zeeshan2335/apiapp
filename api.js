const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const mongoose = require("mongoose");
const studentModel = require("./Models/studentModel");
const employeeModel = require("./Models/employeeModel");

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

api.post("/addstudent", (req, res) => {
  const newStudent = new studentModel(req.body);
  newStudent.save();
  res.send("New Catogory has been added!!!");
});
api.post("/addemployees", (req, res) => {
  const newemployee = new employeeModel(req.body);
  newemployee.save();
  res.send("New Catogory has been added!!!");
});

api.post("/findemply", async (req, res) => {
  const result = await employeeModel(req.body);
  res.send(result);
});
api.get("/employ", async (req, res) => {
  const result = await employeeModel.find({});
  const newForate = result.map((item) => ({
    name: item.name,
    city: item.address.city,
    dist: item.address.dist,
    state: item.address.state,
  }));
  res.json(newForate);
});

api
  .get("/", (res, req) => {
    req.send("welcome to my page...");
  })
  .listen(3030, () => console.log("server is up..."));
