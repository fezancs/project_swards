var mysql=require('mysql');


 var connection=mysql .createConnection({
     host:'104.198.128.7',//'localhost',//'35.239.119.185',  //localhost
     port:'3306',  //3307
     user:'swardsDB',//'root',//'swardsDB',//'fillcraft',  //root
     password: '',//123456789',   //''
     database:'swordskingdom' //'swards_' //swordskingdom
 });

// var connection=mysql .createConnection({
//     host:'localhost',//'35.239.119.185',  //localhost
//     port:'3307',  //3307
//     user:'root',//'root',//'swardsDB',//'fillcraft',  //root
//     password: '',//123456789',   //''
//     database:'swordskingdom' //'swards_' //swordskingdom
// });



connection.connect(function(err){
    if(err) throw err;
    console.log('connected');
});

module.exports=connection;