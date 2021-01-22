var express = require('express');
var router = express.Router();
var model = require('../models/displayhotsales-model');

router.get('/', function(req, res) {
    
     model.displayhotsales(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

module.exports = router;


