var db = require("../db");

let model = {
    getcategorys: (cb) => {
        return db.query("SELECT * FROM category", cb)
    },
   
    
    getcategory: (id, cb) => {
        return db.query("SELECT * FROM category WHERE id=?", [id], cb)
    },
    
    addcategory: (input, cb) => {

        let data = {
            name :input.name,
            isactive : input.isactive,
            createdat : input.createdat,
            description : input.description,
            imagepath : input.imagepath,
            metakeywords : input.metakeywords,
            metadescription	: input.metadescription, 
   
        }
        return db.query("INSERT INTO category SET ?", [data], cb)
    },

    updatecategory: (input, cb) => {

        let data = {
            name :input.name,
            isactive : input.isactive,
            createdat : input.createdat,
            description : input.description,
            imagepath : input.imagepath,
            metakeywords : input.metakeywords,
            metadescription	: input.metadescription, 
        }
        return db.query("UPDATE category SET ? where id=?", [data,input.id], cb)
    },

    deletecategory: (id, cb) => {
        return db.query("DELETE FROM category WHERE id=?", [id], cb);
    }
}

module.exports=model;