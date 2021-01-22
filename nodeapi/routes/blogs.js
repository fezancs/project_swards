var express = require('express');
var router = express.Router();
var model = require('../models/blogs-model');
var multer = require('multer');
 
   
router.get('/', function(req, res) {
    model.getblogs(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getblog(id, function(err, result) {
       // res.json({data: result[0], error: err});
       if(err) {
        res.json(err)
    } else {
        res.json(result);
    }
    })
})

router.post('/add',  function(req, res) {
   
    console.log(req.body);
    model.addblog(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updateblog(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteblog(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

module.exports = router;