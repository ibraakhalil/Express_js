const express = require("express");
const router = express.Router();


router.get("/register",(req,res)=> {
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/registration.html")
    res.cookie("name","ibrahim")
})

router.get("/login",(req,res)=> {
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/login.html");
    res.cookie("name","ibrahim")
})


module.exports = router;



