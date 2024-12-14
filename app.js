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
  console.log("mongo connected");
});

app.get('/getBtata', (req, res) => {
    res.status(200).json({
        name: "Btata",
        price: "5$",
    });
});

app.post("/whatsMyname", (req, res) => {
        const { name, LastName } = req.body || { name:"", LastName:"" }
        if (!name && !LastName) {
            res.status(400).json({
                message: "please Enter Your Name And LastName"
            })
            return;
        }
        res.status(200).json({ message: "hello" + name + LastName })
})
// #--
app.post("/whatsYouerAgeAndName", (req, res) => {
    const { name, Age } = req.body|| { name:"", Age:"" }; 
    if (Age < 18) {
        res.status(400).json({
            message: name + " too young"
        })
        return;
    }
    res.status(200).json({ message: "hello" + name })
})

// #--
app.post("/passwordName", (req, res) => {
    const { password, Name } = req.body || { password:"", Name:"" }
    console.log(password, Name);
    
    if (password === "m", Name == "m") {
        res.status(400).json({
            message: Name + " the password or Name is not correct"
        })
        return;
    }
    res.status(200).json({ message: "success" + Name })
})


app.post("/sum",(req,res)=>{
    const {number1,number2}=req.body
    res.status(200).json({result:number1+number2})
})



app.use("/" , Routes)

module.exports = app;