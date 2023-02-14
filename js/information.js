
var mongoose = require("mongoose");
var  InformationSchema = new mongoose.Schema({
    id : {type: Number},
    name : {type : String},
    description :  {type : String},
    views :  {type : String},
    //comment :  {type : String},
})
var informationS = mongoose.model("travel", InformationSchema);
module.exports = informationS;