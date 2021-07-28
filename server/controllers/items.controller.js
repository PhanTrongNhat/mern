import {itemModel} from '../models/itemModel.js'

export const getItems = async (req,res)=>{
    try{
        const data = await itemModel.find();
       
        res.status(200).send(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).send('err');
        }
    
   
}

export const createItems = async (req,res)=>{

    try{
       const data = req.body;
       const post = new itemModel(data);
       await  post.save();
      ;
        res.status(200).send(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).send('err');
        }
    
}
export const updateItems = async (req,res)=>{

    try{
       const data = req.body;
        const post = await itemModel.findOneAndUpdate({id: data.id},data,{new: true});
        res.status(200).send(post);
    }
    catch(err) {
        console.log(err);
        res.status(500).send('err');
        }
    
}