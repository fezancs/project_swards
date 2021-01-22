var express = require('express');
var router = express.Router();
var model = require('../models/displayspecialproducts-model');

router.get('/', function(req, res) {
    
     model.displayspecialproducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            console.log(result);
            res.json(result);
        }
    })
})

module.exports = router;