var db = require("../db");

let model = {
    getupsellsProducts: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku,up_sells.id , up_sells.upsells_sku FROM up_sells INNER JOIN catalog_product ON up_sells.sku=catalog_product.sku ", cb)
    },
   
    getupsellsProduct: (sku, cb) => {
        return db.query("SELECT * FROM up_sells WHERE sku=?", [sku], cb)
    },
    
    addupsellsProduct: (input, cb) => {
        let data = {
            sku : input.sku,
            upsells_sku :input.upsells_sku
        }
        return db.query("INSERT INTO up_sells SET ?", [data], cb)
    },
    deleteupsellsProduct: (sku,upsells_sku, cb) => {
        return db.query("DELETE FROM up_sells WHERE sku=? AND upsells_sku=?", [sku,upsells_sku], cb);
    }
}

module.exports=model;