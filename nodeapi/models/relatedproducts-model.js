var db = require("../db");

let model = {
    getrelatedProducts: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku,related_products.id , related_products.related_sku FROM related_products INNER JOIN catalog_product ON related_products.sku=catalog_product.sku ", cb)
    },
   
    getrelatedProduct: (sku, cb) => {
        return db.query("SELECT catalog_product.thumbnail , catalog_product.thumbnail_label, catalog_product.price  FROM related_products INNER JOIN catalog_product ON related_products.sku=? AND related_products.related_sku=catalog_product.sku ", [sku], cb)
    },
    
    addrelatedProduct: (input, cb) => {
        let data = {
            sku : input.sku,
            related_sku :input.related_sku
        }
        return db.query("INSERT INTO related_products SET ?", [data], cb)
    },
    deleterelatedProduct: (sku,related_sku, cb) => {
        return db.query("DELETE FROM related_products WHERE sku=? AND related_sku=?", [sku,related_sku], cb);
    }
}

module.exports=model;