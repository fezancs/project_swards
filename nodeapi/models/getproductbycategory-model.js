var db = require("../db");

let model = {
    getproducts: (category,subcategory,offset, limit,cb) => {
        console.log(category);
    console.log(subcategory);
        return db.query("SELECT * FROM  catalog_product Where category=? AND subcategory=? LIMIT ?, ?", [category,subcategory,+offset, +limit], cb)
    },
    getTotalProducts: (category,subcategory,cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product  Where category=? AND subcategory=?" , [category,subcategory] , cb);
    }
   
   
}

module.exports=model;