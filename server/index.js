import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bird from './routers/birds.js';
import routerproducts from './routers/products.router.js';
import routerLogin from './routers/login.js';
const URI ="mongodb+srv://admin:123456hcmus@cluster0.hxmqu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
const port = process.env.port|| 5000;
app.use(bodyParser.json({limit : '30mb'}));
app.use(bodyParser.urlencoded({extended: true,limit : '30mb'}));
app.use(cors());
app.use('/bird',bird);
app.use('/products',routerproducts);
app.use('/login',routerLogin);
app.use('/static',express.static('public'));
app.get('/',(req,res)=>{
 res.send('hello world');
})

// router.render = (req, res) => {
//     const header = res.getHeaders();
//     const totalCountHeader = header["x-total-count"];
//     if (totalCountHeader && req.method === "GET") {
//       const queryParams = queryString.parse(req._parsedUrl.query);
//       console.log(queryParams);
//       res.jsonp({
//         data: res.locals.data,
//         pagination: {
//           _limit: Number.parseInt(queryParams._limit) || 10,
//           _page: Number.parseInt(queryParams._page) || 1,
//           _totalRows: Number.parseInt(totalCountHeader),
//         },
//       });
//     }
  
//     res.jsonp(res.locals.data);
//   };

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



