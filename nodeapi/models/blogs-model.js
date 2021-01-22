var db = require("../db");

let model = {
    getblogs: (cb) => {
        return db.query("SELECT * FROM blogs", cb)
    },
   
    getblog: (id, cb) => {
        return db.query("SELECT * FROM blogs WHERE id=?", [id], cb)
    },
    
    addblog: (input, cb) => {

        let data = {
            title : input.title ,
            sub_title :input.sub_title,   
            created_at : input.created_at,
            identifier :input.identifier ,
            category :input.category,
            status :input.status,
            enable_comments : input.enable_comments ,
            tags :input.tags ,
            image_path :input.image_path,   
            content :input.content,
            short_content :input.short_content,
             meta_keywords :input.meta_keywords,
             meta_description :input.meta_description,
             poster :input.poster, 
        }
        return db.query("INSERT INTO blogs SET ?", [data], cb)
    },

    updateblog: (input, cb) => {

        let data = {
            title : input.title ,
            sub_title :input.sub_title,   
            created_at : input.created_at,
            identifier :input.identifier ,
            category :input.category,
            status :input.status,
            enable_comments : input.enable_comments ,
            tags :input.tags ,
            image_path :input.image_path,   
            content :input.content,
            short_content :input.short_content,
             meta_keywords :input.meta_keywords,
             meta_description :input.meta_description,
             poster :input.poster,
        }
        return db.query("UPDATE blogs SET ? where id=?", [data,input.id], cb)
    },

    deleteblog: (id, cb) => {
        return db.query("DELETE FROM blogs WHERE id=?", [id], cb);
    }
}

module.exports=model;