import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { pdfDownload } from "../controllers/pdf.controller.js";
const pdfRouter = express.Router();

pdfRouter.post("/generate-pdf", isAuthenticated, pdfDownload);

export default pdfRouter;
