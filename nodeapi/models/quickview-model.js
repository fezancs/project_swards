var db = require("../db");

let model = {
    
    getProduct: (sku, cb) => {
        return db.query("SELECT name , price , image1, image2, image3, image4, image5 , short_description, sale,sale_percent ,visibility , rating FROM catalog_product WHERE sku=?", [sku], cb)
    }
    
}

module.exports=model;