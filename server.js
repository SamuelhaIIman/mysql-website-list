const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    let data = {
        name: "Samuel",
        hobbies: ["Coding", "Running", "Learning"]
    }
    res.render('home', { data: data });
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});