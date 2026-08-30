import express from "express";

import {analyzeRequest} from "../controllers/supportController.js";

const router = express.Router();

router.post("/analyze", analyzeRequest);

export default router;