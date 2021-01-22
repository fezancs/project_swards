var db = require("../db");

let model = {
    getnewslettersubscribers: (cb) => {
        return db.query("SELECT * FROM newsletter_subscribers ", cb)
    },
   
    getnewslettersubscriber: (id, cb) => {
        return db.query("SELECT * FROM newsletter_subscribers WHERE id=?", [id], cb)
    },
    
    addnewslettersubscriber: (input, cb) => {
        let data = {
          email : input.email,
          type : input.type,
          firstname : input.firstname,
          middlename : input.middlename,
          lastname : input.lastname,
          _status : input._store,
          _website : input._website,
          _store : input._store
        }
        return db.query("INSERT INTO newsletter_subscribers SET ?", [data], cb)
    },

    updatenewslettersubscriber: (input, cb) => {
        let data = {
          email : input.email,
          type : input.type,
          firstname : input.firstname,
          middlename : input.middlename,
          lastname : input.lastname,
          _status : input._store,
          _website : input._website,
          _store : input._store
        }
        return db.query("UPDATE newsletter_subscribers SET ? WHERE id=?", [data, input.id], cb)
    },

    deletenewslettersubscriber: (id, cb) => {
        return db.query("DELETE FROM newsletter_subscribers WHERE id=?", [id], cb);
    }
}

module.exports=model;