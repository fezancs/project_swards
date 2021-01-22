var express = require('express');
var router = express.Router();
var model = require('../models/displaysubcategory-model');

router.get('/', function(req, res) {
    model.getsubcategorys(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

module.exports = router;