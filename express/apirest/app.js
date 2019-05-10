const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const router=require('./routes/routes');

//settings
app.set('port', 3000);
//middlewares
app.use(morgan('dev'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false }));
app.use(cors());
//rutas
app.use('/',router);

app.listen(app.get('port'), () => {
    console.log('App listening on port '+app.get('port'));
});
