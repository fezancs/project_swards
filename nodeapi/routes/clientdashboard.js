var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

var model = require('../models/clientdashboard-model');

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.json({name: 'admin'});
});

router.get('/:email', function(req, res) {
    let email = req.params.email;
    model.getcustomer(email, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatecustomer(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;