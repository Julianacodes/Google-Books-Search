const mongoose= require("mongoose")
const Schema = mongoose.Schema
const booksSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    authors:{
        type:Array,
        required:true
    },

    description:{
        type:String,
        required: true
    },

    image:{
        type:String,
        required: false
    },

    link:{
        type:String,
        required:false
    }

})

const Book=mongoose.model("Book",booksSchema)
module.exports=Book