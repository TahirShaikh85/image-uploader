const multer = require('multer');

// set storage
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        // the above statement return the extension of the uploaded file

        cb(null,file.fieldname + '-' + Date.now() + ext);
    }
})

store = multer({storage:storage})

module.exports = store;