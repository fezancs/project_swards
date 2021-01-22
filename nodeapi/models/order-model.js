var db = require("../db");

let model = {
    
    getorders: (cb) => {
        return db.query("select * from customer_orders ", cb)
        // return db.query(" select firstname , _address_firstname  ,status,o.order_id ,o.customer_email from customers s,orders o,order_details d where s.email=o.customer_email and o.order_id=d.order_id ", cb)
    },
    getcustomerorderdetails: (id,cb) => {
        return db.query("select * FROM customer_orderdetails WHERE order_id=? ",[id], cb)
    },
    getorderdetails: (id,cb) => {
        console.log(id);
        console.log("id");
       // return db.query("select * FROM customer_orders WHERE order_id=? ",[id], cb)
        return db.query("select customer_billinginfo.* , customer_orders.* from customer_billinginfo INNER JOIN customer_orders ON customer_billinginfo.email = customer_orders.email and customer_orders.order_id = ? ",[id], cb)
    },
    getinvoice: (order_id, cb) => {
        return db.query("SELECT * FROM invoice WHERE order_id=?", [order_id], cb)
    },
    getshippinginfo: (order_id, cb) => {
        return db.query("SELECT * FROM customer_shippinginfo WHERE order_id=?", [order_id], cb)
    },
    addcustomer: (input, cb) => {
        let data = {
            email : input.billinginfo.emailaddress,
            _website :'swordskingdom',
            _store :'swordskingdom',
            account_type :'guest' ,
            //created_at : ,	
            created_in :'swordskingdom'	,
            //dob	,
            firstname: input.billinginfo.fname,
            //gender :	,
            lastname : input.billinginfo.lname,
            middlename : input.billinginfo.mname,
            //password_hash ,
            company : input.billinginfo.cname,
            address : input.billinginfo.address,
            city : input.billinginfo.town,
            state: input.billinginfo.appartment ,
          //  fax ,
            province : input.billinginfo.province,
            postcode : input.billinginfo.postcode,
            country : input.billinginfo.country,
            telephone : input.billinginfo.phonenumber,
            _address_city :input.shippinginfo.town,
            _address_company:input.shippinginfo.cname ,	
            //_address_fax :input.shippinginfo.,	
            _address_firstname :input.shippinginfo.fname,
            _address_lastname :input.shippinginfo.lname,
            _address_middlename:input.shippinginfo.mname	,
            _address_postcode :input.shippinginfo.postcode,
            address_telephone :input.shippinginfo.phonenumber,
            shipping_address:input.shippinginfo.address ,
           // _address_default_billing_	,
           // _address_default_shipping_ ,
        }
        return db.query("INSERT INTO customers SET ?", [data], cb)
    },
    addorder: (input, cb) => {
        let data = {
           customer_email : input.billinginfo.emailaddress,
           status:"orderplaced"
        }
        return db.query("INSERT INTO orders SET ?", [data], cb)
    }
    
}

module.exports=model;