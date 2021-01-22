var express = require('express');
var router = express.Router();
var model = require('../models/hotsales-model');

router.get('/', function(req, res) {
    model.gethotsales(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.gethotsale(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addhotsales(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletehotsales(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;