var db = require("../db");

let model = {
    gethotsales: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku, hotsales.id , hotsales.created_at  FROM hotsales INNER JOIN catalog_product ON hotsales.sku=catalog_product.sku ", cb)
    },
   
    gethotsale: (sku, cb) => {
        return db.query("SELECT * FROM hotsales WHERE sku=?", [sku], cb)
    },
    
    addhotsales: (input, cb) => {
        let data = {
            sku : input.sku,
            created_at :input.created_at
        }
        return db.query("INSERT INTO hotsales SET ?", [data], cb)
    },
    deletehotsales: (id, cb) => {
        return db.query("DELETE FROM hotsales WHERE id=?", [id], cb);
    }
}

module.exports=model;