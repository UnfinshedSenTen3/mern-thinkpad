import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/notes", notesRoutes);

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
