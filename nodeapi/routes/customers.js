var express = require('express');
var router = express.Router();
var model = require('../models/customers-model');
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res) {
    model.getcustomers(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:email', function(req, res) {
    let email = req.params.email;
    model.getcustomer(email, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addcustomer(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatecustomer(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:email', function(req, res) {
    let email = req.params.email;
    model.deletecustomer(email, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/registration', function(req, res) {
   console.log("hi");
    console.log(req.body);
     const password = req.body.password;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        req.body.password = hash;
        model.addcustomer(req.body, function(err, result) {
            res.json({ data: result, error: err })
        });
    });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', {session: false}, function(err, user, info) {
        
        if (err) { return next(err); }

        if ( ! user) {  
          return res.status(500).json(info.message)
        }

        const payload = {
            username: user.firstname,
            email: user.email
        }
        const options = {
            subject: `${user.email}`,
            expiresIn: 3600
        }
        const token = jwt.sign(payload, 'secret123', options);
        
        res.json({token});

    })(req, res, next);
})


module.exports = router;