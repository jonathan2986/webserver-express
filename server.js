const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers')

app.use(express.static( __dirname + '/public' ));

hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS engine
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {

    res.render('home',{
        nombre: 'Jhonatan'

    })
})

app.get('/about',  (req, res) => {

    res.render('about')
})
app.listen(3000, ()=>{
    console.log('Escuchando peticiones en el puerto 3000')
})