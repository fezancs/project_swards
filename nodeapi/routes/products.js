var express = require('express');
var router = express.Router();
var model = require('../models/product-model');

router.post('/insertnewproduct', function(req, res, next) {
    console.log('hiiiiiiii');
    console.log(req.body);
   
});
router.get('/', function(req, res) {
    model.getProducts(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getProduct(sku, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updateProduct(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:sku', function(req, res) {
    let sku = req.params.sku;
    model.deleteProduct(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;