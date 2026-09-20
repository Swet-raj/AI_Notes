import dotenv from "dotenv";
dotenv.config({ override: true });
import express from "express";

import connectDB from "./utils/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/generate.route.js";
import pdfRouter from "./routes/pdf.route.js";
import creditRouter from "./routes/credits.route.js";
import { stripeWebhook } from "./controllers/credits.controller.js";

const app = express();

app.post(
  "/api/v1/credit/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

//middlewares
app.use(
  cors({
    origin: "https://ai-notesclient-zur6.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  return res.json({
    message: "ExamNotes AI Backend Running 🚀",
  });
});

//APIs
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/pdf", pdfRouter);
app.use("/api/v1/credit", creditRouter);

app.listen(port, () => {
  console.log(`App Listening on Port ${port} ✅`);
  connectDB();
});
