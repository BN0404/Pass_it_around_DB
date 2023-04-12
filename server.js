const express = require('express');

const app = express();

app.get('/', function(req, res) {
res.send(`<h1> 99 Bottles of beer on the wall </h1> <a href ='/98'> take one down, pass it around> </a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    // console.log(req.params);
    const { number_of_bottles } = req.params;
    if (number_of_bottles === '0') {
    res.send(`<a href>`)
    }
res.send(`<h2>Number of bottles = {number_of_bottles}</h2> <a href='/${number_of_bottles}-1'> take one down, pass it around </a>`)
})

// get.app('/:number_of_bottles', (req, res) => {
// console.log(req.params)
// })

// app.get('/', function(req, res) {
//     res.send(`<h1>99 Bottles of beer on the wall </h1> <a href='/98'> take one down, pass it around </a>`); 
// });

// app.get('/:number_of_bottles', (req, res) => {
//     console.log(req.params);
//     const { number_of_bottles } = req.params;
//     if (number_of_bottles === "0") {
//         res.send(`<a href='/98'> Start Again</a>`)
//     } if (number_of_bottles < 0 ||  number_of_bottles > 99){
//     res.send(`<a href='/98'> Not Possible </a>`)
//     } else
//     res.send(`<h3> no. of bottles left= ${number_of_bottles}</h3> <a href="/${number_of_bottles - 1}"> take one down, pass it around </a>`);
// })

app.listen(3000, function() {
    console.log('Listening on port 3000');
   });