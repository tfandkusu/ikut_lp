const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});
app.use(express.static('static'));
app.use(sassMiddleware({
    src: __dirname,
    dest: path.join(__dirname, 'static'),
    indentedSyntax: true,
    debug: true,
    outputStyle: 'compressed'
}));

app.listen('3000', () => {
    console.log('Application started');
});
