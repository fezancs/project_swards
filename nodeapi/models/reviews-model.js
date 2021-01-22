var db = require("../db");

let model = {
    getreviews: (cb) => {
        return db.query("SELECT * FROM reviews", cb)
    },
    getreview: (sku, cb) => {
        return db.query("SELECT * FROM reviews WHERE sku=?", [sku], cb)
    },
    addreview: (input, cb) => {
        let data = {
            sku: input.sku,
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            headline: input.headline,
            comment: input.comment,
            rating: input.rating,
        }
        return db.query("INSERT INTO reviews SET ?", [data], cb)
    },
    deletereviews: (id, cb) => {
        return db.query("DELETE FROM reviews WHERE id=?", [id], cb);
    },

}

module.exports=model;