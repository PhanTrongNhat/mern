
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  
    name: {
        type:String,
        required:true
    },
    cost :{
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    favourite:{
        type:String,
        required: true
    },
    categori:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    provider:{
        type: String,
        required: true,
        default: 'anonymous'
    }
},{ timestamps:true});

export const itemModel = mongoose.model('products',schema);