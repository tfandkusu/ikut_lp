const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});
app.use(express.static('static'));

app.listen('3000', () => {
    console.log('Application started');
});
