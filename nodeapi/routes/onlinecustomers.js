var express = require('express');
var router = express.Router();
var model = require('../models/onlinecustomers-model');

router.get('/', function(req, res) {
    model.getonlinecustomers(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})
  
module.exports = router;
