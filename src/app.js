const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//Importando Rutas
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

// config
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Midleware (funciones que se ejecutan antes de que vengan las peticiones de los usuarios)
app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

//Server
app.listen(app.get('port'), () => {
    console.log('Server in port 3000/');
});