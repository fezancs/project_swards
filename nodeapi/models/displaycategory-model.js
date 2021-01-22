var db = require("../db");

let model = {
    getcategorys: (cb) => {
        return db.query("SELECT id ,name FROM category", cb)
    },
}

module.exports=model;