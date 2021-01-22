var express = require('express');
var router = express.Router();
var model = require('../models/blogreviews-model');
var multer = require('multer');
 
   
router.get('/', function(req, res) {
    model.getblogreviews(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})
router.get('/:title', function(req, res) {
    let title = req.params.title;
    model.getblogreview(title, function(err, result) {
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
    model.addblogreview(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteblogreviews(id, function(err, result) {
        res.json({data: result, error: err});
    })
})


module.exports = router;