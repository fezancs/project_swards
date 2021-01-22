var express = require('express');
var router = express.Router();
var model = require('../models/managecategory-model');

router.get('/', function(req, res) {
    model.getcategorys(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getcategory(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addcategory(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatecategory(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletecategory(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;