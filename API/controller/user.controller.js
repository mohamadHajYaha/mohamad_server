const USER_MODEL = require("../models/user.models")

const createUser = async (req, res) => {
    const { userName, email, phone, password,dsplayname,} = req.body
    try {
        const user = await USER_MODEL.create({
            userName: userName,
            email: email,
            password: password,
            phone: phone,
            dsplayname:dsplayname,
        })
        res.status(200).json({
            success: true,
            message: "user created",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            message: error.message
        })

    }
}

const FindUser = async (req,res) =>{
    const { userName } = req.body
    try{
        const users = await USER_MODEL.find({userName})
        res.status(200).json({
            success: true,
            massage: "user finded",
            data: users,
        })
    }
    catch(error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}

const deleteUser = async (req,res) =>{
    const { phone } = req.body
    try{
        const users = await USER_MODEL.deleteOne({
            phone: phone })

        res.status(200).json({
            success: true,
            massage: "user deleted",
            data: users,
        })
    }
    catch(error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })
    }
}


const Login = async (req,res) =>{
    const { phone,password } = req.body
    try{
        const users = await USER_MODEL.findOne({
            phone: phone })

        res.status(200).json({
            success: true,
            massage: "correct login ",
            data: users,
        })
    }
    catch(error) {
        res.status(400).json({
            success: "phone or password not correct",
            error: error.name,
            massage: error.massage
        })
    }
}
const UpdateUser = async (req, res) => {
    const { userName, email, phone, password } = req.body
    try {
        const user = await USER_MODEL.findOneAndUpdate({phone },{ password},{new:true})
   
    
        res.status(200).json({
            success: true,
            massage: "UPDATED SUCCESS",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })

    }
}
const editUser = async (req, res) => {
    const { userName, email, phone, password,dsplayname } = req.body
    try {
        const user = await USER_MODEL.findOneAndUpdate({phone },{ userName , dsplayname},{new:true})
   
    
        res.status(200).json({
            success: true,
            massage: "UPDATED SUCCESS",
            data: user,
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error.name,
            massage: error.massage
        })

    }
}


module.exports = {
    createUser,
    FindUser,
    deleteUser,
    Login,
    UpdateUser,
    editUser
}