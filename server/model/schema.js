const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    filename:{
        type:String,
        unique:true,
        required:true
    },
    contentType:{
        type:String,
        require:true
    },
    imageBase64:{
        type:String,
        require:true
    }
})

module.exports = UploadModel = mongoose.model('uploads',uploadSchema)