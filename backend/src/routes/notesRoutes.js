import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById
} from "../controllers/notesController.js";

//router object to group related routes
const router = express.Router();

//sends a get request to /api/notes , if the req is success - 200 and message
//route /endpoint(a url+http methof allowing client tointerect with specific res)
router.get("/", getAllNotes);

//enpoint to fetch a specific/single note 
router.get("/:id", getNoteById);

//endpoint to create a note
router.post("/", createNote);

//endpoint to update an existing note
//id is to let the client update a specific node
router.put("/:id", updateNote);

//endpoint to delete a specific note
router.delete("/:id", deleteNote);

//default is assign this as the main or default export
export default router;
