const express = require("express");
const morgan = require("morgan")
var bodyParser = require('body-parser')
const app = express();

const users = [];

app.use(morgan("combined"))
app.use(express.static("public"))
app.use(bodyParser.json())
// app.use((req, res, next) => {
//     if(req.url !== "/abc") {
//         res.send("404")
//     } else {
//         console.log(new Date().toString())
//         setTimeout(() => {
//             next()
//         }, 5000)
//     }
   
// })

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})



app.get("/abc", (req, res) => {
    console.log(new Date().toString())
    res.send("<h1>Hello Abc</h1>")
})

app.post("/create-user", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.send("User Created Successfully")
})

app.get("/users", (req,res) => {
    res.send(users);
})

app.get("*", (req, res) => {
    res.send("<h1>Page not found</h1>")
})

app.listen(8000)
