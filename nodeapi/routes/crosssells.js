var express = require('express');
var router = express.Router();
var model = require('../models/crosssells-model');

router.get('/', function(req, res) {
    model.getcrosssellsProducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getcrosssellsProduct(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addcrosssellsProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:sku/:crosssells_sku', function(req, res) {
    let sku = req.params.sku;
    let crosssells_sku=req.params.crosssells_sku;
    model.deletecrosssellsProduct(sku,crosssells_sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;