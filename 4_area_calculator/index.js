require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/views/index.html")
})
app.get("/area",(req,res)=> {
    res.sendFile(__dirname + "/views/area.html")
})
app.get("/triangle",(req,res)=> {
    res.sendFile(__dirname + "/views/triangle.html")
})

app.post("/triangle",(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const calculate = 0.5*height*base;

    res.send(`The Triangle Area is ${calculate}`);
})
app.post("/area",(req,res)=> {
    const height = req.body.height;
    const width = req.body.width;
    const calc = height*width;

    res.send(`The Area is ${calc}`)
})




app.listen(port, ()=> {
    console.log(`server running at http://localhost:${port}`);
})

