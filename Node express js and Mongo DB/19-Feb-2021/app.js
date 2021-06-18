const express = require("express");
const cors = require("cors");

const fs = require("fs");
const morgan = require("morgan")
var bodyParser = require('body-parser')
const app = express();
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

const users = [];
app.use(cors("*"))
// app.use(morgan("combined"))
app.use(morgan('common', {
    stream: fs.createWriteStream("./access.log", { flags: 'a' })
  }))
  
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

//
// const content = fs.readFileSync("./demo.html", "utf-8")
// console.log("content",content)
//  async
// fs.readFile("./demo.html", "utf8", (error, content) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(content)
//     }
// })
// fs.writeFile("./app1.js", "var a = 'hello World'", {
//     encoding: "utf-8",
//     flag: "a" // "w"
// }, (error) => {
//     if(error) {
//         console.log("Error", error)
//     } else {
//         console.log("File created")
//     }
// })
console.log("readFile")
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
