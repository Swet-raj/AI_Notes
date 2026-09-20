import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { generateNotes } from "../controllers/generate.controller.js";

const notesRouter = express.Router();

notesRouter.post("/generate-notes", isAuthenticated, generateNotes);

export default notesRouter;
