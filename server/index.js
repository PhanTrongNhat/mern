import express from 'express';
import bodyParser  from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routers/items.router.js';
import bird from './routers/birds.js';
import path from 'path';

const URI ="mongodb+srv://admin:123456hcmus@cluster0.hxmqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
const port = process.env.port|| 5000;
app.use(bodyParser.json({limit : '30mb'}));
app.use(bodyParser.urlencoded({extended: true,limit : '30mb'}));
app.use(cors());
app.use('/bird',bird);
app.use('/items',router);
app.use('/static',express.static('public'));
app.get('/',(req,res)=>{
 res.send('hello world');
})


mongoose.set('useNewUrlParser', true);
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true, useFindAndModify: false,useCreateIndex: true})
.then(()=>{
    console.log('connect to DB!')
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})
.catch((err)=>{
    console.log(err);
})



