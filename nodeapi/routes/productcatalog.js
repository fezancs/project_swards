var express = require('express');
var router = express.Router();
var model = require('../models/productcatalog-model');

router.get('/:offset/:limit', function(req, res) {
   let offset = req.params.offset;
   let limit = req.params.limit;
   model.getproducts(offset, limit,function(err, results) {
       if(err) {
           res.json(err)
       } else {
         model.getTotalProducts(function(err, result) {
            if(err) {
                res.json(err)
            } else {
                res.json({data:results , total: result[0].total});
            }
         })
       }
   })
})


router.post('/', function(req, res, next) {
    console.log('hiiiiiiii');
    var sql = "INSERT INTO catalog_product (sku,_store,_attribute_set,_type,_root_category,_product_websites,brand,color,cost,country_of_manufacture,creareseo_discontinued,creareseo_discontinued_product,created_at,custom_block,custom_block_2,custom_design,custom_design_from,custom_design_to,custom_layout_update,description,featured,gallery,gift_message_available,has_options,image_label,manufacturer,media_gallery,meta_description,meta_keyword,meta_title,minimal_price,msrp,msrp_display_actual_price_type,msrp_enabled,name,news_from_date,news_to_date,options_container,page_layout,price,product_image_size,product_page_type,required_options,short_description,special_from_date,special_price,special_to_date,status,tax_class_id,thumbnail,thumbnail_label,updated_at,url_key,url_path,visibility,weight,qty,min_qty,use_config_min_qty,is_qty_decimal,backorders,use_config_backorders,min_sale_qty,use_config_min_sale_qty,max_sale_qty,use_config_max_sale_qty,is_in_stock,notify_stock_qty,use_config_notify_stock_qty,manage_stock,use_config_manage_stock,stock_status_changed_auto,use_config_qty_increments,qty_increments,use_config_enable_qty_inc,enable_qty_increments,is_decimal_divided,_links_related_sku,_links_related_position,_links_crosssell_sku,_links_crosssell_position,_links_upsell_sku,_links_upsell_position,_associated_sku,_associated_default_qty,_associated_position,_tier_price_website,_tier_price_customer_group,_tier_price_qty,_tier_price_price,_group_price_website,_group_price_customer_group,_group_price_price,_media_attribute_id,_media_image,_media_lable,_media_position,_media_is_disabled,_custom_option_store,_custom_option_type,_custom_option_title,_custom_option_is_required,_custom_option_price,_custom_option_sku,_custom_option_max_characters,_custom_option_sort_order,_custom_option_row_title,_custom_option_row_price,_custom_option_row_sku,_custom_option_row_sort,_super_products_sku,_super_attribute_code,_super_attribute_option,_super_attribute_price_corr) VALUES ('sku6',NULL,'Default','simple','Default','Base',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'HELLLOOOOO','NO',NULL,NULL,1,'chinese','chinese',NULL,'meta description','meta keyword','meta title',1,NULL,NULL,NULL,'sku1',NULL,NULL,NULL,NULL,330,NULL,'wide grid',0,'short description',null,112,null,1,null,null,null,null,null,null,4,6,100,0,1,0,0,1,1,1,1000,1,1,0,1,1,0,0,1,0,1,0,0,NULL,NULL,NULL,NULL,'NM-1409',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,90,NULL,NULL,2,0,'Default','checkbox','Sharpen Blade',0,NULL,NULL,0,0,'Yes',15,NULL,0,NULL,NULL,NULL,NULL)";
     db.query(sql, function(err, result) {  
      if (err) throw err;
      console.log('record inserted');
   });
});


module.exports = router;