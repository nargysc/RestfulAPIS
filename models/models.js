const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema ({
    Username: {
        required:true,
        type:String 
    },
    Designation: {
        required:true,
        type:String
    },
    Company: {
        required:true,
        type:String
    },
    Age: {
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('Data', dataSchema);