const UploadModel = require('../model/schema');
const fs = require('fs');

exports.home = async (req,res)=>{
    // res.render('main');
    const all_images = await UploadModel.find();
    res.render('main',{images:all_images});
}

exports.uploads = (req,res,next)=>{
    const files = req.files;
    if(!files){
        const error = new Error("Please Choose files")
        error.httpStatusCode = 400;
        return next(error)
    }
    // res.json(files);
    // iterate all the images and convert them into base64 encoding
  let imgArray = files.map((file)=>{
    let img = fs.readFileSync(file.path); // return buffer data of particular image
    console.log(img);
    return encode_img = img.toString('base64'); // convert buffer into base64
  })

  // store that base64 data into database
  let result = imgArray.map((src,index)=>{

    // create object to store data into the collection
    let finalImg = {
        filename:files[index].originalname,
        contentType:files[index].mimeType,
        imageBase64:src
    }

    // storting this object into mongoDB
    let newUpload = new UploadModel(finalImg);

                  // const newImg = new UploadModel({
                  //     filename:files[index].originalname,
                  //     contentType:files[index].mimeType,
                  //     imageBase64:src
                  // })

                  // newImg
                  // .save(newImg)
                  // .then()

    // saving data into database
    return newUpload
    .save()
    .then(()=>{
        return {msg:`${files[index].originalname} uploaded successfully...`}
    })
    .catch(err=>{
        if(err){
            if(err.name == 'MongoError' && err.code == 1100){ // duplicate image error
                return Promise.reject({err:`Duplicate ${files[index].originalname}, file already exist!`});
            }
            return Promise.reject({err:err.message || `Cannot upload ${files[index].originalname} something missing.`})
        }
    })
  });
  Promise.all(result).then(msg=>{
    res.redirect('/');
  }).catch(err=>{
    res.json(err);
  })
}
