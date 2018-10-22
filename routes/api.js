const express = require('express');
const router = express.Router();
const Customer = require('../models/customers');


//get list from db
router.get('/customers/:name', function(req, res, next){

    Customer.find({name: req.params.name}, (err, customers) => {

        res.send(customers);
        
    }).catch(next);
    
});

//get list from db
router.get('/customers/', function(req, res, next){

    Customer.find({}, () => {
        res.send('');
    }).catch(next);
    
});


//post to db
router.post('/customers', (req, res, next) => {

    Customer.create(req.body).then( (customer) => {

        res.send(customer);

    }).catch(next);

});


//update to db
router.put('/customers/:id', (req, res, next) => {

    Customer.findOneAndUpdate({_id: req.params.id}, req.body).then( () => {

        Customer.findOne({_id: req.params.id}).then( (customer) => {

            res.send(customer);

        });
    });
});

//delete from db
router.delete('/customers/:id', (req, res, next) => {

    Customer.findOneAndDelete({_id: req.params.id}).then((customer) => {

        res.send(customer);

    });
});

module.exports = router;