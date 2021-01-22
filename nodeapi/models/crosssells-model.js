var db = require("../db");

let model = {
    getcrosssellsProducts: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku,cross_sells.id , cross_sells.crosssells_sku FROM cross_sells INNER JOIN catalog_product ON cross_sells.sku=catalog_product.sku ", cb)
    },
   
    getcrosssellsProduct: (sku, cb) => {
        return db.query("SELECT * FROM cross_sells WHERE sku=?", [sku], cb)
    },
    
    addcrosssellsProduct: (input, cb) => {
        let data = {
            sku : input.sku,
            crosssells_sku :input.crosssells_sku
        }
        return db.query("INSERT INTO cross_sells SET ?", [data], cb)
    },
    deletecrosssellsProduct: (sku,crosssells_sku, cb) => {
        return db.query("DELETE FROM cross_sells WHERE sku=? AND crosssells_sku=?", [sku,crosssells_sku], cb);
    }
}

module.exports=model;