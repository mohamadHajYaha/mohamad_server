const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./API/routes/routes");


const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL =
  "mongodb+srv://mcfondx:m.13579.m@cluster0.lj3hb.mongodb.net/";

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected✔");
});



app.post("/",(req,res)=>{
    res.status(200).json({test:"done"})
})



app.use("/" , Routes)

module.exports = app;