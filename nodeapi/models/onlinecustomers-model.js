var db = require("../db");

let model = {
    getonlinecustomers: (cb) => {
        return db.query("SELECT * FROM online_customers", cb)
    },  
}

module.exports=model;