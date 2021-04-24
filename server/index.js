import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routers/items.router.js';
const URI ="mongodb+srv://admin:123456hcmus@cluster0.hxmqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
const port = process.env.port|| 5000;
app.use(cors());
app.use('/items',router);

app.get('/',(req,res)=>{
 res.send('hello world');
})



mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('connect to DB!')
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})
.catch((err)=>{
    console.log(err);
})
