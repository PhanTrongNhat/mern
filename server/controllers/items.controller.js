import {itemModel} from '../models/itemModel.js'

export const getItems = async (req,res)=>{
    try{
        let post = new itemModel({
            title:'computer',
            price:'1000$',
           
            pet:'cat'
        
        })
        post.save();
        let data = await itemModel.find();
        console.log(data);
        res.send(data);
    }
    catch(err) {
        console.log(err);
        res.send('err');
        }
    
   
}

export const createItems =  (req,res)=>{

    
}