const express = require('express')


// MONGO DB - NON relational json
// SQL, MY SQL - Relational

/* [ // collections
    { // document
        "rank": 1, // field
        "name": "Domenic",
        "points": 45,
        "team": "khi"
    },{
        "rank": 1,
        "name": "Domenic",
        "points": 45,
        "team": "khi"
    },{
        "rank": 1,
        "name": "Domenic",
        "points": 45,
        "team": "khi"
    },{
        "rank": 1,
        "name": "Domenic",
        "points": 45,
        "team": "khi"
    },

] */

const mongoose = require('mongoose')
const userSchema =require('./model/users')
const app = express()

app.listen('3000', () => {
    console.log('listening***')
})

const dbUrl ="mongodb+srv://umair786:umair786@cluster0.nvwuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((success)=>{
    console.log(success,'success')
})
.catch((err)=>{
    console.log(err,'err')
})
app.get('/', (req, res) => {
    //getting data from db
    const data = [{ name: 'Kashif' }, { name: 'Umair' }]
    res.json(data)
})

app.get('/adduser',(req,res)=>{
    const userData = new userSchema({
        username:'umair',
        email:'umair@gmail.com'
    })
    userData.save()
    .then((success)=>{
        console.log(success)
    })
    .catch((err)=>{
        console.log(err)
    })

})

app.get('/getAllRestaurants', (req, res) => {
    //database work
    const restaurants = [{}]
    res.json(restaurants)
})

app.use(express.json());

app.post('/addRestaurant', (req, res) => {
    console.log('req***', req.body)
    //db work: insert data into DB
})

/* POST Request from FE
fetch('/addRestaurant', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Hot n Spicy',
        address: 'Branzo, Karachi, Pakistan',
        specialItem: 'Garma garam Mayo Garlic Roll'
    })
})
.then(res => res.json())
.then(res => console.log(res))
*/

/*
1) Create Folder
2) npm init in that folder
3) npm i express
4) create index.js file
5) Write express code
*/
