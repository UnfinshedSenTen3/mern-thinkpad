import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// const express = require("express")

dotenv.config();

// express creates app object enabling us to use .get .post .put
const app = express();

connectDB();

app.use(express.json());

// for the following url refer to notesRoutes.js file
app.use("/api/notes", notesRoutes);

const port = process.env.PORT || 5001;

// assigns backend a port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});