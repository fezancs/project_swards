var db = require("../db");

let model = {
    getbestsellers: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku, bestsellers.id , bestsellers.created_at  FROM bestsellers INNER JOIN catalog_product ON bestsellers.sku=catalog_product.sku ", cb)
    },
   
    getbestseller: (sku, cb) => {
        return db.query("SELECT * FROM bestsellers WHERE sku=?", [sku], cb)
    },
    
    addbestsellers: (input, cb) => {
        let data = {
            sku : input.sku,
            created_at :input.created_at
        }
        return db.query("INSERT INTO bestsellers SET ?", [data], cb)
    },
    deletebestsellers: (id, cb) => {
        return db.query("DELETE FROM bestsellers WHERE id=?", [id], cb);
    },
   
}

module.exports=model;