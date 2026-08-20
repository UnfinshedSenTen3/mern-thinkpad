import express from "express" ;
import notesRoutes from "./routes/notesRoutes.js"
// const express =  require("express")

//express creates app object enabling us to use .get .post .put
const app = express();

 //for the following url refer to notesRoutes.js file
app.use ("/api/notes" , notesRoutes )


//assigns backend a port
app.listen(5001 , ()=>{
    console.log("server started on port: 5001");
});
