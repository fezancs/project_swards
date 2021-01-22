var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});


router.get('/students/:id', function(req, res, next) {
  res.render('students', { result: req.params });
});

module.exports = router;
