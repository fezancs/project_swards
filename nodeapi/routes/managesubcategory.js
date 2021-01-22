var express = require('express');
var router = express.Router();
var model = require('../models/managesubcategory-model');

router.get('/', function(req, res) {
    model.getsubcategorys(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getsubcategory(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addsubcategory(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatesubcategory(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletesubcategory(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;