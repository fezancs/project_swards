var db = require("../db");
let model = {
   
    getcustomer: (email, cb) => {
        return db.query("SELECT * FROM customer_billinginfo WHERE email=?", [email], cb)
    },
    
    
    updatecustomer: (input, cb) => {

        let data = {
            firstname :input.firstname,
            lastname :input.lastname,
            company :input.company,
            address :input.address,
            city :input.city,
            state :input.state,
            fax :input.fax,
            province :input.province,
            postcode :input.postcode,
            country :input.country ,
            telephone  :input.telephone ,
        }
        return db.query("UPDATE customer_billinginfo SET ? where email=?", [data,input.email], cb)
    },

}

module.exports=model;