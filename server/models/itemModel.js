
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    price :{
        type: String,
        required: true
    },
    image:{
        type:String
    },
    provider:{
        type: String,
        required: true,
        default: 'anonymous'
    }
},{ timestamps:true});

export const itemModel = mongoose.model('item',schema);