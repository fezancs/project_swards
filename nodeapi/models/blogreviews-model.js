var db = require("../db");

let model = {
    getblogreviews: (cb) => {
        return db.query("SELECT * FROM blogreviews", cb)
    },
    getblogreview: (title, cb) => {
        return db.query("SELECT * FROM blogreviews WHERE title=?", [title], cb)
    },
    addblogreview: (input, cb) => {
        let data = {
            title: input.title,
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            headline: input.headline,
            comment: input.comment,
            rating: input.rating,
        }
        return db.query("INSERT INTO blogreviews SET ?", [data], cb)
    },
    deleteblogreviews: (id, cb) => {
        return db.query("DELETE FROM blogreviews WHERE id=?", [id], cb);
    },

}

module.exports=model;