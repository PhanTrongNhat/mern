import {itemModel} from '../models/product.model.js'

export const getItems = async (req,res)=>{
    try{
        // console.log(req.query)
        
        let data = await itemModel.find();
       
        if(req.query.page){
            data = data.slice(req.query.page*3,req.query.page*3 +3);
        }
        //console.log(data)
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
       console.log(typeof data);
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