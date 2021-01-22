var express = require('express');
var router = express.Router();
var model = require('../models/quickview-model');

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getProduct(sku, function(err, result) {
        res.json({data: result[0], error: err});
    })
})


module.exports = router;