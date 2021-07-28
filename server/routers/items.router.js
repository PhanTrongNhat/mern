import express from 'express';
import {getItems,createItems, updateItems} from '../controllers/items.controller.js';
import auth from "../middlewares/auth.js" 
const Router = express.Router();

Router.get('/',auth,getItems);
Router.post('/',createItems);
Router.post('/update',updateItems)
export default Router;