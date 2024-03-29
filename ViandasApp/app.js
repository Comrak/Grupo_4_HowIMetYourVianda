const express = require('express');
const app = express();
const path = require('path');
const PUBLICFOLDER = path.resolve('public')
const routerMain = require('./routers/mainRouter');
const routerProduct = require('./routers/productsRouter')
const routerUser = require('./routers/userRouter')
const routerTransaction = require('./routers/transactionRouter')
const session = require('express-session');
const cookies = require('cookie-parser');
const productsRoutes = require('./routers/api/productsRoutes');
const usersRoutes = require('./routers/api/usersRoutes');

const cors = require("cors");
app.use(cors());

// Settings post requirement in app
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Settings session
app.use(session({
    secret  : 'secret',
    resave  : false,
    saveUninitialized : false
    }));

app.use(cookies());
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMiddleware);
    

// calling methodOverride
const methodOverride = require('method-override');
app.use(methodOverride('_method'));




app.use(express.static(PUBLICFOLDER))

app.set('view engine', 'ejs');


const numeroPuerto = 3200;
app.listen(numeroPuerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + numeroPuerto);
})

app.use('/', routerMain);
app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes)
// app.use('/trans', routerTransaction);

app.use((req, res, next)=>{
    res.status(404).render('not-found');
})