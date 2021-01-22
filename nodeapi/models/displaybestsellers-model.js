var db = require("../db");

let model = {
    displaybestsellers: (cb) => {
        return db.query("SELECT catalog_product.price , catalog_product.thumbnail , catalog_product.thumbnail_label , catalog_product.sale , catalog_product.visibility , catalog_product.rating , catalog_product.sale_percent FROM bestsellers INNER JOIN catalog_product ON bestsellers.sku=catalog_product.sku ", cb)
    }
}

module.exports=model;