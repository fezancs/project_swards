var express = require('express');
var router = express.Router();
var model = require('../models/relatedproducts-model');

router.get('/', function(req, res) {
    model.getrelatedProducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getrelatedProduct(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addrelatedProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:sku/:related_sku', function(req, res) {
    let sku = req.params.sku;
    let related_sku=req.params.related_sku;
    model.deleterelatedProduct(sku,related_sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;