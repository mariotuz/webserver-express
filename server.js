const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js')

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;


app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: 'mario alberto tuz segovia'
    });

});

app.get('/about', function(req, res) {


    res.render('about.hbs');

})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})