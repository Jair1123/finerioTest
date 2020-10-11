const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');


//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware
app.use(morgan('dev'));
//app.use(express.urlencoded({extended:false}));
//app.use(express.json());

//routes
app.use(require('./routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server
app.listen(app.get('port'),() =>{
    console.log('Server on port',app.get('port'));
});