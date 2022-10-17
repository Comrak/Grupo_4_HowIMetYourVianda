const express = require('express');
const app = express();
const path = require('path');
const PUBLICFOLDER = path.resolve('public')
app.use(express.static(PUBLICFOLDER))
const numeroPuerto = 3000;
app.listen(numeroPuerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + numeroPuerto);
})
app.get('/', (req, res)=>{
    res.sendFile(path.resolve('views/home.html'))
})
app.get('/productDetails', (req, res)=>{
    res.sendFile(path.resolve('views/productDetails.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('views/register.html'))
})