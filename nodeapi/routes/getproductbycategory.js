var express = require('express');
var router = express.Router();
 var model = require('../models/getproductbycategory-model');


router.get('/getproduct/:category/:subcategory/:offset/:limit', function(req, res) {
    let category = req.params.category;
    let subcategory=req.params.subcategory;
    let offset = req.params.offset;
    let limit = req.params.limit;
    console.log(category);
    console.log(subcategory);
    console.log(offset);
    console.log(limit);
     model.getproducts(category,subcategory,offset, limit,function(err, results) {
        if(err) {
            res.json(err)
        } else {
          model.getTotalProducts(category,subcategory,function(err, result) {
             if(err) {
                 res.json(err)
             } else {
                 res.json({data:results , total: result[0].total});
             }
          })
        }
    })
})

module.exports = router;