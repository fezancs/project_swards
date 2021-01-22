var db = require("../db");

let model = {
    getspecialproducts: (cb) => {
        return db.query("SELECT catalog_product.name , catalog_product.sku, specialproducts.id , specialproducts.created_at  FROM specialproducts INNER JOIN catalog_product ON specialproducts.sku=catalog_product.sku ", cb)
    },
   
    getspecialproduct: (sku, cb) => {
        return db.query("SELECT * FROM specialproducts WHERE sku=?", [sku], cb)
    },
    
    addspecialproducts: (input, cb) => {
        let data = {
            sku : input.sku,
            created_at :input.created_at
        }
        return db.query("INSERT INTO specialproducts SET ?", [data], cb)
    },
    deletespecialproducts: (id, cb) => {
        return db.query("DELETE FROM specialproducts WHERE id=?", [id], cb);
    },
   
}

module.exports=model;