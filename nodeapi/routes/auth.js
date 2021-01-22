var express = require('express');
var router = express.Router();
var authModel = require('../models/auth-model');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var passport=require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    res.json({name: 'admin'});
});


router.post('/login', function(req, res, next) {
    passport.authenticate('local', {session: false}, function(err, admin, info) {
        
        if (err) { return next(err); }

        if ( ! admin) {
            return res.status(500).json(info.message)
        }

        const payload = {
            adminname: admin.admin_name,
            adminid: admin.admin_id
        }
        const options = {
            subject: `${admin.admin_id}`,
            expiresIn: 3600
        }
        const token = jwt.sign(payload, 'secret123', options);
        
        res.json({token});

    })(req, res, next);
})


module.exports = router;