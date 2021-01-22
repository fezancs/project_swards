var db = require("../db");

let model = {
    displayhotsales: (cb) => {
        return db.query("SELECT catalog_product.price , catalog_product.thumbnail , catalog_product.thumbnail_label  FROM hotsales INNER JOIN catalog_product ON hotsales.sku=catalog_product.sku ", cb)
    }
}

module.exports=model;