import express from 'express';
import {getItems,createItems, updateItems} from '../controllers/products.controller.js';
import auth from "../middlewares/auth.middleware.js" 
const Router = express.Router();

Router.get('/',getItems);
Router.post('/',createItems);
Router.post('/update',updateItems)
export default Router;