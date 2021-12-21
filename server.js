//Import Express module
let express = require('express');

let app = express();
app.use(express.urlencoded({extended: true})); // pour body et enlever warning

//Pour utiliser des sessions
let session = require('express-session');

app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));

//Imports Router
let router = require('./routes');
app.use('/', router);

//pour utilisation sur les serveurs de l'ecam et/ou maison
app.listen(3000, () => {
    console.log('Running on port 80');
});
/*
//pour utilisation sur sa propre machine
app.listen(3000, () => {
    console.log('Running on port 3000');
});*/

//Utilisation CSS
app.use(express.static('public'));
app.use('/public', express.static('public'));
