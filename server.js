const express = require('express');
const app = express();
const port = 4000;

app.use('/', express.static('public'));

const budget = require('C:\\Users\\17046\\Desktop\\VS\\week03\\personal-budget\\budget.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});