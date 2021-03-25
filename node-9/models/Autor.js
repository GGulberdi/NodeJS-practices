const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name:{type:String,required:true,unique:true, maxlength:[10, 'you can enter max 10 characters']},
    category:{type:String,
        required:true,
    minlength:[3,'You can enter min {MINLENGTH} characters in the `{PATH}` field.(Entered Value:{VALUE})'],
    maxlength:[15,'You can enter max {MAXLENGTH} characters in the `{PATH}` field.(Entered Value:{VALUE})']},
    score:{type:Number,default:0},
    views:{type:Number,default:1},
    isDelete:{type:Boolean,default:false}
})

module.exports = mongoose.model('author',AuthorSchema)