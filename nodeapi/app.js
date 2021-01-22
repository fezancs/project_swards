var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./userpassport-config');
//require('./passport-config');

var indexRouter = require('./routes/index');
var productcatalogRouter =require('./routes/productcatalog');
var customersRouter =require('./routes/customers');
var ProductsRouter =require('./routes/products');
var AuthRouter =require('./routes/auth');
var RelatedproductsRouter =require('./routes/relatedproducts');
var UpsellsRouter =require('./routes/upsells');
var CrosssellsRouter =require('./routes/crosssells');
var NewslettersubscriberRouter =require('./routes/newslettersubscriber');
var OnlinecustomersRouter =require('./routes/onlinecustomers');
var OrdersRouter =require('./routes/orders');
var BlogsRouter =require('./routes/blogs');
var BestsellersRouter =require('./routes/bestsellers');
var PopularRouter =require('./routes/popular');
var DisplaybestsellersRouter =require('./routes/displaybestseller');
var DisplaypopularRouter =require('./routes/displaypopular');
var DisplayhotsalesRouter =require('./routes/displayhotsales');
var ClientdashboardRouter =require('./routes/clientdashboard');
var fileUploadRouter = require('./routes/fileupload');
var reviewsRouter = require('./routes/reviews');
var HotsalesRouter = require('./routes/hotsales');
var blogreviewsRouter = require('./routes/blogreviews');
var quickviewRouter = require('./routes/quickview');
var guestorderRouter = require('./routes/guestorder');
var registeredorderRouter = require('./routes/registeredorder');
var specialproductsRouter = require('./routes/specialproducts');
var displayspecialproductsRouter = require('./routes/displayspecialproducts');
var managecategoryRouter = require('./routes/managecategory');
var managesubcategoryRouter = require('./routes/managesubcategory');
var displaycategoryRouter = require('./routes/displaycategory');
var displaysubcategoryRouter = require('./routes/displaysubcategory');
var getproductbycategoryRouter = require('./routes/getproductbycategory');
var displaycustomerorderdetailsRouter = require('./routes/displaycustomerorderdetails');
var app = express();
var passport=require('passport');
const bodyParser = require('body-parser');
 app.use(bodyParser.json()); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.static(__dirname + '/public/images'));
app.use(cors());

const hbs = require('hbs');

//this required before view engine setup
hbs.registerPartials(__dirname + '/views/partials');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use('/', indexRouter);
app.use('/productcatalog',productcatalogRouter);
app.use('/customers',customersRouter);
app.use('/products',ProductsRouter);
app.use('/auth',AuthRouter);
app.use('/relatedproducts',RelatedproductsRouter);
app.use('/upsells',UpsellsRouter);
app.use('/crosssells',CrosssellsRouter);
app.use('/newslettersubscribers',NewslettersubscriberRouter);
app.use('/onlinecustomers',OnlinecustomersRouter);
app.use('/orders',OrdersRouter);
app.use('/blogs',BlogsRouter);
app.use('/bestsellers',BestsellersRouter);
app.use('/popular',PopularRouter);
app.use('/displaybestsellers',DisplaybestsellersRouter);
app.use('/displaypopular',DisplaypopularRouter);
app.use('/clientdashboard', passport.authenticate('jwt', { session: false }),ClientdashboardRouter);
app.use('/fileupload', fileUploadRouter);
app.use('/reviews', reviewsRouter);
app.use('/hotsales', HotsalesRouter);
app.use('/displayhotsales',DisplayhotsalesRouter);
app.use('/blogreviews', blogreviewsRouter);
app.use('/quickview', quickviewRouter);
app.use('/guestorder', guestorderRouter);
app.use('/registeredorder', registeredorderRouter);
app.use('/specialproducts', specialproductsRouter);
app.use('/displayspecialproducts', displayspecialproductsRouter);
app.use('/managecategory', managecategoryRouter);
app.use('/managesubcategory', managesubcategoryRouter);
app.use('/displaycategory', displaycategoryRouter);
app.use('/displaysubcategory', displaysubcategoryRouter);
app.use('/getproductbycategory', getproductbycategoryRouter);
app.use('/displaycustomerorderdetails', displaycustomerorderdetailsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
