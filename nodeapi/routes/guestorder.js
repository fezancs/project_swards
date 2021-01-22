var express = require('express');
var router = express.Router();
var model = require('../models/guestorder-model');
var db = require("../db");


router.post('/add', function(req, res) {
   
    console.log(req.body);
    model.addcustomerbillinginfo(req.body, function(err, result) {
        if(err)
        {
            console.log(err);
        }
        
        if(!err)
        {
            model.addcustomerorder(req.body, function(err, result) {
                if(!err)
                {
                    var orderid=result.insertId;
                    model.addcustomershippinginfo(req.body,orderid, function(err, result) {
            
                        if(!err)
                        {
                            model.addcustomerorderdetails(req.body,orderid, function(err, result) {
                                if(!err)
                                {
                                    model.addcustomerinvoice(req.body,orderid, function(err, result) {
                            
                                        res.json({data: result, error: err});
                                    })  
                                }
                                //res.json({data: result, error: err});
                            })  
                        }

                        //res.json({data: result, error: err});
                    })  
                }

                //res.json({data: result, error: err});
            })   
       // }
    //    else{
      //     res.json({data: result, error: err});    
        }
        // res.json({data: result, error: err});
    })


})




module.exports = router;