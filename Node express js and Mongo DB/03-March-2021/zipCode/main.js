const express = require("express");
const mongoose = require("mongoose");

const app  = express();
const userModel = require("./users/model");

mongoose.connect(
    'mongodb+srv://bmj123:bmj123@cluster0.siffa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(() => {
    console.log("connected")
})
.catch((error) => {
    console.log("Failed to connect with DB", error)
})
app.get("/", (req, res) => {
    res.send("Hello World");
})


app.get('/user', (req, response) => {
    const user = {
        firstName: 'user',
        lastName: "1",
        email: "user1@gmail.com",
        age: 23,
        isVerified: false,
        createdAt: Date.now(),
    }

    userModel.create(user)
    .then((res) => {
        response.send("<h1>User Created Sucessfully</h1>")
        console.log(res)
    })
    .catch((error) => {
        response.send("<h1>Error on creating User</h1>")
        console.log(error)
    })
})


app.get("/users", (req, res) => {

    userModel.find()
    .then((users) => {
        res.send(users)
    })
    .catch((error) => {
        res.send("Failed to fetch users")
    })

})


app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    userModel.findById(userId)
    .then((user) => {
        if(user) {
            res.send(user)
        } else {
            res.send("User Not Found")
        }
    })
    .catch((error) => {
        res.send("Failed to fetch user")
    })
})

app.get("/delete/:id", (req, res) => {
    const userId = req.params.id;
    // userModel.findByIdAndRemove()
    userModel.findByIdAndDelete(userId)
    .then((user) => {
        res.send("<h1>User Deleted</h1>")
    })
    .catch((error) => {
        res.send("Failed to delete user")
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})