var db = require("../db");

let model = {
    displaypopular: (cb) => {
        return db.query("SELECT catalog_product.price , catalog_product.thumbnail , catalog_product.thumbnail_label , catalog_product.sale , catalog_product.visibility , catalog_product.rating , catalog_product.sale_percent FROM popular INNER JOIN catalog_product ON popular.sku=catalog_product.sku ", cb)
    }
}

module.exports=model;