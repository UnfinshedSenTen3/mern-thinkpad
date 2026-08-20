import express from "express" 

//router object to group related routes
const router = express.Router() ;

//sends a get request to /api/notes , if the req is success - 200 and message
//route /endpoint(a url+http methof allowing client tointerect with specific res)
router.get("/", (req,res) => {
    res.status(200).send("u got 5 notes lil bro");
});

//endpoint to create a note
router.post("/", (req,res) => {
    res.status(201).json({message:"note created successfully"});
});

//endpoint to update an existing note
//id is to let the client update a specific node
router.put("/:id", (req,res) => {
    res.status(201).json({message:"note updated successfully"});
});

//endpoint to delete a specific note
router.put("/:id", (req,res) => {
    res.status(200).json({message:"note deleted successfully"});
});

//default is assign this as the main or default export 
export default router ;