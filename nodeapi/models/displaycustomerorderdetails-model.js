var db = require("../db");

let model = {
    
   
    getinvoice: (email, cb) => {
        return db.query("SELECT * FROM invoice WHERE email=?", [email], cb)
    },
    
    getcustomerorder: (email, cb) => {
        return db.query("SELECT * FROM customer_orders WHERE email=?", [email], cb)
    },
    
   
}

module.exports=model;