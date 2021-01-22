var db = require("../db");

let model = {
    getProducts: (cb) => {
        return db.query("SELECT * FROM catalog_product", cb)
    },
   
    getProduct: (sku, cb) => {
        return db.query("SELECT * FROM catalog_product WHERE url_path=?", [sku], cb)
    },
    
    addProduct: (input, cb) => {

        let data = {
            sku : input.sku,
            _store : input._store,
            _attribute_set : input._attribute_set,	
            _type : input._type,
            _product_websites : input._product_websites,
            country_of_manufacture	: input.country_of_manufacture,
            creareseo_discontinued	: input.creareseo_discontinued,
            creareseo_discontinued_product	: input.creareseo_discontinued_product,
            created_at	: input.created_at,
            custom_block : input.custom_block,	
            custom_block_2 : input.custom_block_2,
            description : input.description,
            featured : input.featured,
            gift_message_available	:input.gift_message_available,
            has_options : input.has_options,
            meta_description	: input.meta_description,
            meta_keyword : input.meta_keyword,
            meta_title : input.meta_title,
            name :input.name,
            news_from_date	: input.news_from_date,
            news_to_date : input.news_to_date,
            options_container : input.options_container,
            price : input.price,
            product_page_type:input.product_page_type,
            required_options :input.required_options,	
            short_description : input.short_description, 
            special_from_date :input.special_from_date, 
            special_price:input.special_price,  
            special_to_date : input.special_to_date,          
            status : input.status,
            tax_class_id : input.tax_class_id,
            thumbnail : input.thumbnail,
            thumbnail_label	: input.thumbnail_label,
            updated_at	:input.updated_at,
            url_key	: input.url_key,
            url_path : input.url_path,
            visibility : input.visibility,
            weight : input.weight,
            is_in_stock : input.is_in_stock,
            _group_price_website : input._group_price_website,
            _group_price_customer_group : input._group_price_customer_group,
            _group_price_price : input._group_price_price,
            image1:input.image1,
            image2:input.image2,
            image3:input.image3,
            image4:input.image4,
            image5:input.image5,
            rating:3      
        }
        return db.query("INSERT INTO catalog_product SET ?", [data], cb)
    },

    updateProduct: (input, cb) => {

        let data = {
            _store : input._store,
            _attribute_set : input._attribute_set,	
            _type : input._type,
            _product_websites : input._product_websites,
            country_of_manufacture	: input.country_of_manufacture,
            creareseo_discontinued	: input.creareseo_discontinued,
            creareseo_discontinued_product	: input.creareseo_discontinued_product,
            created_at	: input.created_at,
            custom_block : input.custom_block,	
            custom_block_2 : input.custom_block_2,
            description : input.description,
            featured : input.featured,
            gift_message_available	:input.gift_message_available,
            has_options : input.has_options,
            meta_description	: input.meta_description,
            meta_keyword : input.meta_keyword,
            meta_title : input.meta_title,
            name :input.name,
            news_from_date	: input.news_from_date,
            news_to_date : input.news_to_date,
            options_container : input.options_container,
            status : input.status,
            tax_class_id : input.tax_class_id,
            thumbnail : input.thumbnail,
            thumbnail_label	: input.thumbnail_label,
            updated_at	:input.updated_at,
            url_key	: input.url_key,
            url_path : input.url_path,
            visibility : input.visibility,
            weight : input.weight,
            is_in_stock : input.is_in_stock,
            _group_price_website : input._group_price_website,
            _group_price_customer_group : input._group_price_customer_group,
            _group_price_price : input._group_price_price
           
        }
        return db.query("UPDATE catalog_product SET ? where sku=?", [data,input.sku], cb)
    },

    deleteProduct: (sku, cb) => {
        return db.query("DELETE FROM catalog_product WHERE sku=?", [sku], cb);
    }
}

module.exports=model;