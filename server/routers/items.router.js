import express from 'express';
import {getItems,createItems} from '../controllers/items.controller.js';
const Router = express.Router();

Router.get('/',getItems);
Router.post('/',createItems);
export default Router;