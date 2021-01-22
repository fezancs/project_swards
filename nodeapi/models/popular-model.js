var db = require("../db");

let model = {
    getpopulars: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku, popular.id , popular.created_at  FROM popular INNER JOIN catalog_product ON popular.sku=catalog_product.sku ", cb)
    },
   
    getpopular: (sku, cb) => {
        return db.query("SELECT * FROM popular WHERE sku=?", [sku], cb)
    },
    
    addpopular: (input, cb) => {
        let data = {
            sku : input.sku,
            created_at :input.created_at
        }
        return db.query("INSERT INTO popular SET ?", [data], cb)
    },
    deletepopular: (id, cb) => {
        return db.query("DELETE FROM popular WHERE id=?", [id], cb);
    }
}

module.exports=model;