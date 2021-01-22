var express = require('express');
var router = express.Router();
var model = require('../models/displaycustomerorderdetails-model');


router.get('/invoice/:email', function(req, res) {
    let email = req.params.email;
    model.getinvoice(email, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.get('/order/:email', function(req, res) {
    let email = req.params.email;
    model.getcustomerorder(email, function(err, result) {
        res.json({data: result, error: err});
    })
})


module.exports = router;