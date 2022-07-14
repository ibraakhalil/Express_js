require("dotenv").config();
const exp = require("express");
const bodyParser = require("body-parser")
const app = exp();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())





app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/index.html")
})
app.get("/register",(req,res)=> {
    res.sendFile(__dirname + "/registration.html")
})

app.post("/register",(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    res.send(`<h1>My Full Name is ${firstName} ${lastName}</h1>`)
})


app.use((req,res)=>{
    res.send("Page Not Found")
})





app.listen(port ,()=> {
    console.log(`Server Running Successfull at http://localhost:${port}`);
})











