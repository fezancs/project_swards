var express = require('express');
var router = express.Router();
var model = require('../models/reviews-model');
var multer = require('multer');
 
   
router.get('/', function(req, res) {
    model.getreviews(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})
router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getreview(sku, function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
        // res.json({data: result[0], error: err});
    })
})
router.post('/add',  function(req, res) {
    console.log(req.body);
    model.addreview(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletereviews(id, function(err, result) {
        res.json({data: result, error: err});
    })
})


module.exports = router;