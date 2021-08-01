import express from "express";
import { postInform, postCreate } from "../controllers/login.controller.js";
var router = express.Router();

// define the home page route
router.post("/", postInform);
router.post("/create", postCreate);

export default router;
