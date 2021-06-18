const express = require('express')
const app = express()

app.listen('3000', () => {
    console.log('listening***')
})


app.get('/', (req, res) => {
    //getting data from db
    const data = [{ name: 'Kashif' }, { name: 'Umair' }]
    res.json(data)
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
