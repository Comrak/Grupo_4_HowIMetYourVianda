const express = require('express');
const app = express();
const path = require('path');
const PUBLICFOLDER = path.resolve('public')
const routerMain = require('./routers/mainRouter');

app.use(express.static(PUBLICFOLDER))

app.set('view engine', 'ejs');


const numeroPuerto = 3000;
app.listen(numeroPuerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + numeroPuerto);
})

app.use('/', routerMain);