var express = require('express');
var router = express.Router();
var model = require('../models/upsells-model');

router.get('/', function(req, res) {
    model.getupsellsProducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getupsellsProduct(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addupsellsProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:sku/:upsells_sku', function(req, res) {
    let sku = req.params.sku;
    let upsells_sku=req.params.upsells_sku;
    model.deleteupsellsProduct(sku,upsells_sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;