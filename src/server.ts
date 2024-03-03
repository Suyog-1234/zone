import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import commonAuthRoutes from "./routes/common-auth-routes/auth.routes";


// express server initailization
dotenv.config()
const app = express();

//default middleware

app.use(express.json());
app.use(cors({}));

// server routes

app.use("/auth",commonAuthRoutes)
 
// port listening 
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})