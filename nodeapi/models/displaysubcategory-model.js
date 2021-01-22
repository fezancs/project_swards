var db = require("../db");

let model = {
    getsubcategorys: (cb) => {
        return db.query("SELECT id , parentid ,name FROM subcategory", cb)
    },
}

module.exports=model;