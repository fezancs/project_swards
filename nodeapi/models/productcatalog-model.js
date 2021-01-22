var db = require("../db");

let model = {
    getproducts: (offset, limit,cb) => {
        return db.query("SELECT price , thumbnail , thumbnail_label , sale ,visibility ,rating ,sale_percent FROM  catalog_product LIMIT ?, ?", [+offset, +limit], cb)
    },
    getTotalProducts: (cb) => {
        return db.query("SELECT COUNT(*) AS total FROM catalog_product", cb);
    }
   
   
}

module.exports=model;