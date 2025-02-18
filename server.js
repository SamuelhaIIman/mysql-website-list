const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home', { name: 'Akashdeep'});
});
const server = app.listen(4000, function() {
    console.log('listening to port 4000')
});