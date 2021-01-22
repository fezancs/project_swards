var db = require("../db");

let model = {
    getcustomers: (cb) => {
        return db.query("SELECT * FROM customer_billinginfo", cb)
    },
   
    getcustomer: (email, cb) => {
        return db.query("SELECT * FROM customer_billinginfo WHERE email=?", [email], cb)
    },
    
    addcustomer: (input, cb) => {
        let data = {
            email :input.email ,
            _website :input._website,
            _store :input._store,
            account_type :input.accounttype,
           // created_at :input. created_at,	
            created_in :input.created_in,	
            firstname :input.firstname,
            lastname :input.lastname,
            password_hash :input.password,
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
        return db.query("INSERT INTO customer_billinginfo SET ?", [data], cb)
    },

    updatecustomer: (input, cb) => {

        let data = {
            _website :input._website,
            _store :input._store,
            account_type :input.account_type,
            created_at :input. created_at,	
            created_in :input.created_in,	
            dob	:input.dob,
            firstname :input.firstname,
            gender :input.gender	,
            lastname :input.lastname,
            middlename	:input.middlename,
            password_hash :input.password_hash,
            company :input.company,
            address :input.address,
            city :input.city,
            state :input.state,
            fax :input.fax,
            province :input.province,
            postcode :input.postcode,
            country :input.country ,
            telephone  :input.telephone ,
            _address_city :input._address_city	,
            _address_company :input._address_company,	
            _address_fax :input._address_fax,	
            _address_firstname :input._address_firstname,
            _address_lastname : input._address_lastname,
            _address_middlename	:input._address_middlename,
            _address_postcode :input._address_postcode ,
            address_telephone :input.address_telephone,
            shipping_address :input.shipping_address,
            _address_default_billing_ :input._address_default_billing_	,
            _address_default_shipping_:input._address_default_shipping_
        }
        return db.query("UPDATE customers SET ? where email=?", [data,input.email], cb)
    },

    deletecustomer: (email, cb) => {
        return db.query("DELETE FROM customers WHERE email=?", [email], cb);
    },

    findOne: (username, cb) => {
        return db.query("SELECT * FROM customer_billinginfo WHERE email=? ", [username], cb);
    },
    findById: (email, cb) => {
        return db.query("SELECT * FROM customer_billinginfo WHERE email=? ", [email], cb);
    }


}

module.exports=model;