const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const url = 'mongodb://username:password1@ds237723.mlab.com:37723/address';


mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log('connected to db');
});

mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', routes);

app.use( (err, req, res, next) => {

    res.status(422).send({error: err.message});

});


app.listen(process.env.port || 4000, function() {
    console.log('listening to port 4000');
});