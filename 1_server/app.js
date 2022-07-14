const express = require("express")
const app = express();
const userRouter = require("./routes/users_route")

app.use("/user", userRouter)


app.get("/",(req,res)=> {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/register",(req,res)=> {
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/registration.html")
    res.cookie("name","ibrahim")
})

app.get("/login",(req,res)=> {
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/login.html");
    res.cookie("name","ibrahim")
})

app.use((req,res)=>{
    res.send("<h1> 404 Not found </h1>") 
}) 



module.exports = app;



