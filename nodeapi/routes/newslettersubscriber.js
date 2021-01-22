var express = require('express');
var router = express.Router();
var model = require('../models/newslettersubscriber-model');

router.get('/', function(req, res) {
    model.getnewslettersubscribers(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    console.log(id);
    model.getnewslettersubscriber(id, function(err, result) {
        res.json({data: result[0], error: err});
    })
})

router.post('/add', function(req, res) {
    model.addnewslettersubscriber(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.put('/update', function(req, res) {
    model.updatenewslettersubscriber(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletenewslettersubscriber(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
  
module.exports = router;
