import express from "express";

import isAuthenticated from "../middleware/isAuthenticated.js";
import { createCreditsOrder } from "../controllers/credits.controller.js";

const creditRouter = express.Router();

creditRouter.post("/order", isAuthenticated, createCreditsOrder);

export default creditRouter;
