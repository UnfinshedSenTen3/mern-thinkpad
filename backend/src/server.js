import express from "express";
import cors from "cors";
import path from "path";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";

// const express = require("express")

dotenv.config();

// express creates app object enabling us to use .get .post .put
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(rateLimiter);
// this middleware will parse JSON bodies: req.body
// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

// for the following url refer to notesRoutes.js file
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
