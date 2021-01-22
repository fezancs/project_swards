
var express = require('express');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
})
  
var upload = multer({ storage: storage }).array('userfiles', 1);

router.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          return res.status(500).json(err);
        } else if (err) {
          // An unknown error occurred when uploading.
          return res.status(500).json(err);
        }
        
        let uploadedFiles = [];
        for(let item of req.files) {
            uploadedFiles.push({filename: item.originalname});
        }

        // Everything went fine.
        res.json({progress: 100, files: uploadedFiles});
    })
});

module.exports = router;
