
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    provider:{
        type: String,
        required: true,
        default: 'anonymous'
    }
},{ timestamps:true});

export const categoriModel = mongoose.model('categoris',schema);