const express = require("express");
const { createUser, FindUser, deleteUser,Login ,UpdateUser,editUser} = require("../controller/user.controller");
const userRouter = express.Router();


userRouter.post("/createUser", createUser)
userRouter.post("/FindUser", FindUser)
userRouter.post("/deleteUser", deleteUser) 
userRouter.post("/Login", Login) 
userRouter.post("/UpdateUser", UpdateUser) 
userRouter.post("/editUser", editUser) 
module.exports = userRouter;
