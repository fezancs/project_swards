var db = require("../db");

let model = {
    getsubcategorys: (cb) => {
        return db.query("SELECT * FROM subcategory", cb)
    },
   
    
    getsubcategory: (id, cb) => {
        return db.query("SELECT * FROM subcategory WHERE id=?", [id], cb)
    },
    
    addsubcategory: (input, cb) => {

        let data = {
            name :input.name,
            parentid: input.parentid,
            isactive : input.isactive,
            createdat : input.createdat,
            description : input.description,
            imagepath : input.imagepath,
            metakeywords : input.metakeywords,
            metadescription	: input.metadescription, 
   
        }
        return db.query("INSERT INTO subcategory SET ?", [data], cb)
    },

    updatesubcategory: (input, cb) => {

        let data = {
            name :input.name,
            parentid: input.parentid,
            isactive : input.isactive,
            createdat : input.createdat,
            description : input.description,
            imagepath : input.imagepath,
            metakeywords : input.metakeywords,
            metadescription	: input.metadescription, 
        }
        return db.query("UPDATE subcategory SET ? where id=?", [data,input.id], cb)
    },

    deletesubcategory: (id, cb) => {
        return db.query("DELETE FROM subcategory WHERE id=?", [id], cb);
    }
}

module.exports=model;