const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const PORT = 5500;


//***********Query System *************/

// app.get("/", (req,res) => {
//     // const id = req.query.id;
//     // const name = req.query.name;
//     const {id,name} = req.query;

//     res.send(`My Name is ${name || "Ibrahim"} <br> ID is ${id || 10001}`)
// })


//*************Route System **************/

// app.get("/userId/:id/userAge/:age", (req,res) => {
//     const age = req.params.age;
//     const id = req.params.id;

//     res.send(`My Id is ${id || "100001"} <br> Age is ${age || 25}`)
// })




//*************Body-Parser System *********/

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post("/user", (req,res) => {
    
    const name = req.body.name;
    const age = req.body.age;

    res.send(`My Name is ${name} <br> Age is ${age}`)
})









app.listen(PORT, () => {
    console.log(`Server start Successfully at localhost:${PORT}`);
})



