var db = require("../db");

let model = {
    addcustomerbillinginfo: (input, cb) => {
        let data = {
            email : input.billinginfo.email,
            _website :input.billinginfo.website,
            _store :input.billinginfo.store,
            account_type : input.billinginfo.accounttype,
            //created_at : ,
            created_in:	input.billinginfo.createdin,
            firstname: input.billinginfo.firstname,
            lastname : input.billinginfo.lastname,
            company : input.billinginfo.company,
            address : input.billinginfo.address,
            city : input.billinginfo.town,
            state: input.billinginfo.appartment ,
            fax :input.billinginfo.fax,
            province : input.billinginfo.province,
            postcode : input.billinginfo.postcode,
            country : input.billinginfo.country,
            telephone : input.billinginfo.telephone,
        }
        return db.query("INSERT INTO customer_billinginfo SET ?", [data], cb)
    },
    addcustomerorder: (input, cb) => {
        let data = {
           email : input.billinginfo.email,
           status :"orderplaced",
           total_items :input.itemscount,
           total_bill :input.totalbill,
           shippment_charges : 23,
          // created_at date,
           created_in : input.billinginfo.createdin,
        }
        return db.query("INSERT INTO customer_orders SET ?", [data], cb)
    },
    addcustomershippinginfo: (input,orderid, cb) => {
        let data = {
           email : input.billinginfo.email,
           order_id :orderid,    
           _address_city :input.shippinginfo.town,	
           _address_company:input.shippinginfo.company,		
           _address_fax :input.shippinginfo.fax, 	
           _address_firstname :input.shippinginfo.firstname,	
           _address_lastname :input.shippinginfo.lastname,	
           _address_postcode :input.shippinginfo.	postcode,
           _address_telephone :input.shippinginfo.telephone,	
           _address_address  :input.shippinginfo.address ,

        }
        return db.query("INSERT INTO customer_shippinginfo SET ?", [data], cb)
    },
    addcustomerorderdetails: (input,orderid, cb) => {
               
        var jsondata = input.cartitems;
        var values = [];
        for(var i=0; i< jsondata.length; i++)
            values.push([orderid,input.billinginfo.email,jsondata[i].name,jsondata[i].price,jsondata[i].quantity]);
         
           return db.query("INSERT INTO customer_orderdetails (order_id,email,product_sku, price,qty) VALUES ?", [values], cb)
    },
    addcustomerinvoice: (input,orderid, cb) => {
        let data = {
           //invoice_date date,
           order_id :orderid,
           email : input.billinginfo.email,
           status :"paid",
           totalbill :input.totalbill,
        }
        return db.query("INSERT INTO invoice SET ?", [data], cb)
    },
    
    
}

module.exports=model;