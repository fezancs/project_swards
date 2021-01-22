export interface customerorderdetails {
    email: string,
    order_id: number,
    price: number,
    product_sku: string,
    qty: number,
}


export interface invoice {
    invoice_id: number,
    invoice_date: Date,
    order_id: number,
    email: string,
    status: string,
    totalbill:number
}

export interface shippinginfo{
   _address_address: string,
   _address_city:  string,
   _address_company:  string,
   _address_fax:  string,
   _address_firstname:  string,
   _address_lastname:  string,
   _address_postcode: number,
   _address_telephone:  string,
}

export interface order{
account_type: string,
address: string,
city:string,
company: string,
country: string,
created_at: Date,
created_in: "swordskingdom"
email: string,
fax: string,
firstname: string,
lastname: string,
order_id: number
postcode: number,
province: string,
shippment_charges: number
state: string,
status: string,
telephone: string,
total_bill: number,
total_items: number,
_store: string,
_website: string,
}
