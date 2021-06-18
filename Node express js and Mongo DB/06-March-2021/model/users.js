const mongoose=require('mongoose')
const Schema = mongoose.Schema;


const userDetail= new Schema({
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
}
})

const userSchema = mongoose.model('userDetail',userDetail);
module.exports = userSchema

