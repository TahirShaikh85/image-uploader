const mongoose = require('mongoose');
const config = require('../../config');

const Connect = async()=>{
    try {
        const con = mongoose.connect(config.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

module.exports = Connect