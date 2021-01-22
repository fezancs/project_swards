var express = require('express');
var router = express.Router();
var model = require('../models/displaycategory-model');

router.get('/', function(req, res) {
    model.getcategorys(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

module.exports = router;