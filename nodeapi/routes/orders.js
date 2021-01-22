var express = require('express');
var router = express.Router();
var model = require('../models/order-model');
var db = require("../db");

router.get('/', function(req, res) {
    model.getorders(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:order_id', function(req, res) {
    let id = +req.params.order_id;
    console.log(id);
    console.log("aaa");
    model.getorderdetails(id, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.get('/orderdetails/:id', function(req, res) {
    let id = +req.params.id;
    model.getcustomerorderdetails(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
router.get('/invoice/:id', function(req, res) {
    let id = +req.params.id;
    console.log(id);
    model.getinvoice(id, function(err, result) {
        res.json({data: result, error: err});
    })
})
router.get('/shippinginfo/:id', function(req, res) {
    let id = +req.params.id;
    console.log(id);
    model.getshippinginfo(id, function(err, result) {
        res.json({data: result, error: err});
    })
})




router.post('/add', function(req, res) {
    
    model.addcustomer(req.body, function(err, result) {
        if(!err){
            model.addorder(req.body, function(err, result){
                var id=result.insertId;
                var jsondata = req.body.cartitems;
                var values = [];
                for(var i=0; i< jsondata.length; i++)
                   values.push([id,jsondata[i].name,jsondata[i].price,jsondata[i].quantity,5,"swordskingdom","swordskingdom","swordskingdom"]);
            
                db.query('INSERT INTO order_details (order_id,product_sku, price,qty,shippment_charges,created_in,_website,_store) VALUES ?', [values], function(err,result) {
                if(err) {
                   res.json({data: result, error: err});
                }
              }); 
            
            })
        }
        res.json({data: result, error: err});
    })
})



module.exports = router;